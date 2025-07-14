import { merriweather, merriweatherSans, notoSerif } from "@/lib/fonts";
import { Box, Heading, Text } from "@chakra-ui/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useWindowScroll } from "react-use";
import { useEffect } from "react";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: (props) => {
          const { children, className, node, ...rest } = props;
          return (
            <Text
              fontSize={{ base: "md", lg: "2xl" }}
              className={merriweather.className}
              fontWeight={"300"}
              marginBlock={{ base: "0.8rem", lg: "1rem" }}
              textIndent={"2rem"}
              lineHeight={"taller"}
            >
              {children}
            </Text>
          );
        },
        h1: (props) => {
          const { children, className, node, ...rest } = props;

          return (
            <Heading
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl" }}
              lineHeight="short"
              className={notoSerif.className}
            >
              {children}
            </Heading>
          );
        },

        h2: (props) => {
          const { children, className, node, ...rest } = props;

          return (
            <Heading
              as="h2"
              fontSize={{ base: "3xl", lg: "5xl" }}
              lineHeight="short"
              className={notoSerif.className}
            >
              {children}
            </Heading>
          );
        },

        h3: (props) => {
          const { children, className, node, ...rest } = props;

          return (
            <Heading
              as="h3"
              fontSize={{ base: "2xl", lg: "4xl" }}
              lineHeight="short"
              className={notoSerif.className}
            >
              {children}
            </Heading>
          );
        },

        h4: (props) => {
          const { children, className, node, ...rest } = props;

          return (
            <Heading
              as="h4"
              fontSize={{ base: "xl", lg: "3xl" }}
              lineHeight="short"
              className={notoSerif.className}
            >
              {children}
            </Heading>
          );
        },

        h5: (props) => {
          const { children, className, node, ...rest } = props;

          return (
            <Heading
              as="h5"
              fontSize={{ base: "lg", lg: "2xl" }}
              lineHeight="short"
              className={notoSerif.className}
            >
              {children}
            </Heading>
          );
        },

        h6: (props) => {
          const { children, className, node, ...rest } = props;

          return (
            <Heading
              as="h6"
              fontSize={{ base: "md", lg: "xl" }}
              lineHeight="short"
              className={notoSerif.className}
            >
              {children}
            </Heading>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
