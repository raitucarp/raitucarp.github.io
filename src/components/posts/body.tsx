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
              fontSize={["md", "2xl"]}
              className={merriweather.className}
              fontWeight={"300"}
              marginBlock={["0.8rem", "1rem"]}
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
              fontSize={["4xl", "6xl"]}
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
              fontSize={["3xl", "5xl"]}
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
              fontSize={["2xl", "4xl"]}
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
              fontSize={["xl", "3xl"]}
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
              fontSize={["lg", "2xl"]}
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
              fontSize={["md", "xl"]}
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
