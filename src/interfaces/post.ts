import type { ReadTimeResults } from "reading-time";

export type Post = {
  slug: string;
  title: string;
  published: Date;
  coverImage: string;
  author: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  stats?: ReadTimeResults;
};
