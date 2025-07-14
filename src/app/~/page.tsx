import { getAllPosts } from "@/lib/api";
import { merriweather, merriweatherSans, notoSans } from "@/lib/fonts";
import {
  Breadcrumb,
  Heading,
  HStack,
  List,
  Stack,
  StackSeparator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import Link from "next/link";
import count from "word-count";

function TheBreadcrumb({ postCount }: { postCount: number }) {
  return (
    <Breadcrumb.Root variant={"plain"}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="/">Home</Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>
            <Text fontWeight={"bold"} as="span">
              {postCount}
            </Text>{" "}
            Posts
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}

export default function PostsPage() {
  const allPosts = getAllPosts();
  return (
    <>
      <TheBreadcrumb postCount={allPosts.length} />
      <VStack alignItems={"start"} w="100%">
        <List.Root w="100%" listStyle={"none"} gap={"3rem"}>
          {allPosts.map((post, key) => (
            <List.Item key={key} position="relative">
              <Heading
                fontSize={"3xl"}
                lineHeight={"tall"}
                wordBreak={"break-word"}
                className={merriweather.className}
                css={{ "& a:hover": { textDecor: "underline" } }}
              >
                <Link href={`/~/${post.slug}`}>{post.title}</Link>
              </Heading>
              <Stack
                direction={{ base: "column", lg: "row" }}
                w="100%"
                separator={<StackSeparator />}
                gap={5}
              >
                <Text
                  flex={5}
                  wordBreak={"break-word"}
                  className={merriweather.className}
                  fontWeight={"300"}
                  fontSize={"xl"}
                  lineHeight={"tall"}
                >
                  {post.excerpt}
                </Text>
                <VStack
                  flex={2}
                  justify="start"
                  alignItems={"start"}
                  listStylePosition={"inside"}
                >
                  <List.Root className={notoSans.className} fontWeight={"300"}>
                    <List.Item>
                      published{" "}
                      {formatDistance(new Date(), new Date(post.published))} ago
                    </List.Item>
                    <List.Item>{post.stats?.text}</List.Item>
                    <List.Item>{post.stats?.words} words</List.Item>
                    <List.Item
                      fontWeight={"bold"}
                      css={{ "& a:hover": { textDecor: "underline" } }}
                    >
                      <Link href={`/~/${post.slug}`}>read more &raquo;</Link>
                    </List.Item>
                  </List.Root>
                </VStack>
              </Stack>
            </List.Item>
          ))}
        </List.Root>
      </VStack>
    </>
  );
}
