import { Post } from "@/interfaces/post";
import { getUnixTime } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import { glob, globSync, globStream, globStreamSync, Glob } from "glob";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllMarkdownInPostDirectory() {
  const markdownFiles = globSync(`${postsDirectory}/**/*.md`, {
    ignore: {
      ignored: (p) => /README\.md$/.test(p.name),
    },
  });
  return markdownFiles;
}

export function getPostBySlug(slug: string): Post | undefined {
  const allPostPaths = getAllMarkdownInPostDirectory();

  const post = allPostPaths
    .map((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);
      return { ...data, content, stats } as Post;
    })
    .find((v) => v.slug == slug);

  if (!post) return;

  return post;
}

export function getPostByFilepath(filepath: string): Post {
  const realSlug = filepath.replace(/\.md$/, "");
  const fullPath = `${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const stats = readingTime(content);

  return { ...data, content, stats } as Post;
}

export function getAllPosts(): Post[] {
  const allPostPaths = getAllMarkdownInPostDirectory();
  const posts = allPostPaths
    .map((slug) => getPostByFilepath(slug))
    .sort((post1, post2) =>
      getUnixTime(post1.published) > getUnixTime(post2.published) ? -1 : 1
    )
    .map((post) => ({ ...post, stats: readingTime(post.content) }));
  return posts;
}

export function getLast(count: number): Post[] {
  return getAllPosts().slice(0, count);
}
