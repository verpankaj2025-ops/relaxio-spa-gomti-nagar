import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export const getPost = cache(async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
  slug,
  contentHtml,
  ...(data as {
    title: string;
    description: string;
    keywords: string[];
    image?: string;
  }),
};
});

export const getAllPosts = cache(() => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        image: data.image || "/images/spa.avif",
      };
    })
    .filter(
      (post) =>
        post.title &&
        post.description
    );
});
