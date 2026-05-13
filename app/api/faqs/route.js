export async function GET() {
  try {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqjcqONpk-8NyLGN4e74KKzFsGp8SMgZvOZxtBinYLaTg7IDQG8-NwuOFgbzTDCMfLVvIAJTiYEiPx/pub?output=csv";

    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Google Sheet");
    }

    const text = await res.text();

    const rows = text
      .split("\n")
      .slice(1)
      .filter((row) => row.trim() !== "");

    const faqs = rows
      .map((row) => {
        const cols = row
          .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
          .map((col) =>
            col
              .replace(/^"|"$/g, "")
              .replace(/\r/g, "")
              .trim()
          );

        return {
          page: cols[0]?.toLowerCase() || "",
          question: cols[1] || "",
          answer: cols.slice(2).join(", ") || "",
        };
      })
      .filter(
        (faq) =>
          faq.page &&
          faq.question &&
          faq.answer
      );

    return Response.json(faqs, {
      status: 200,
    });

  } catch (error) {
    console.error("FAQ API ERROR:", error);

    return Response.json(
      {
        error: "Failed to fetch FAQs",
      },
      {
        status: 500,
      }
    );
  }
}