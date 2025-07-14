import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostByFilepath, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdown";
import {
  Container,
  HStack,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { PostBody } from "@/components/posts/body";
import { PostHeader } from "@/components/posts/header";
import { merriweather, merriweatherSans } from "@/lib/fonts";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { ReadingTimeProgressBar } from "@/components/reading-progress";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Portal>
        <ReadingTimeProgressBar />
      </Portal>
      <VStack
        as="article"
        alignItems={"start"}
        py={{ base: "1rem", lg: "3rem" }}
        w="100%"
      >
        <PostHeader
          _heading={{
            fontSize: { base: "2xl", lg: "5xl" },
            lineHeight: { base: "tall", lg: "shorter" },
            className: merriweather.className,
          }}
          {...post}
        />
        <PostBody content={post.content || ""} />
      </VStack>
      <IconButton
        position="fixed"
        left={{ base: "unset", lg: "1rem" }}
        right={{ base: "3rem", lg: "unset" }}
        top="1rem"
        asChild
        rounded="full"
        variant="subtle"
      >
        <Link href="/~/">
          <FiArrowLeft />
        </Link>
      </IconButton>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Ribhararnus Pracutiar Blog`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage ? post.ogImage.url : ""],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
