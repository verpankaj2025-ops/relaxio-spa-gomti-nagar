export async function GET() {
  try {
    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqjcqONpk-8NyLGN4e74KKzFsGp8SMgZvOZxtBinYLaTg7IDQG8-NwuOFgbzTDCMfLVvIAJTiYEiPx/pub?output=csv"
    );

    const text = await res.text();

    const rows = text.split("\n").slice(1);

    const faqs = rows
      .map((row) => {
        const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

        return {
          page: cols[0]?.trim().toLowerCase(),
          question: cols[1]?.trim(),
          answer: cols.slice(2).join(",")?.trim(), // 👈 FIX
        };
      })
      .filter((f) => f.page && f.question && f.answer);

    return Response.json(faqs);
  } catch (error) {
    return Response.json({ error: "Failed to fetch FAQs" });
  }
}