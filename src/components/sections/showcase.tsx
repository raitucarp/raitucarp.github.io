import { notoSans, notoSerif } from "@/lib/fonts";
import {
  Button,
  ButtonProps,
  Heading,
  HStack,
  StackSeparator,
  Text,
  VStack,
  Link as ChakraLink,
  LinkProps as AnchorProps,
  Stack,
} from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaCodeCommit } from "react-icons/fa6";
import { FiGitBranch } from "react-icons/fi";

type ShowcaseParams = {
  title: string;
  description: string;
  actionText: string;

  Icon?: IconType;
  children?: ReactNode;
  _button?: ButtonProps;
  _anchor?: AnchorProps;
  _link?: LinkProps;
};

export function Showcase({
  title,
  description,
  actionText,
  Icon,
  children,
  _anchor,
  _link,
  _button,
}: ShowcaseParams) {
  return (
    <Stack
      justify="start"
      alignSelf={"center"}
      separator={<StackSeparator />}
      gap={["1rem", "2rem"]}
      px={["5%", "8%"]}
      w={["100%", "80%"]}
      direction={["column", "row"]}
    >
      <Stack
        w={["100%", "40%"]}
        alignItems={["center", "end"]}
        direction={["row", "column"]}
      >
        {Icon && (
          <Text as="span" fontSize={["2xl", "5xl"]}>
            <Icon />
          </Text>
        )}
        <Heading
          fontSize={["xl", "4xl"]}
          textAlign={["left", "right"]}
          lineHeight={"shorter"}
          wordWrap={"break-word"}
        >
          {title}
        </Heading>
      </Stack>
      <VStack w={["100%", "60%"]} gap={"1rem"} alignItems={"start"}>
        <Text
          fontSize={["md", "2xl"]}
          className={notoSerif.className}
          fontWeight={"300"}
          textAlign={"left"}
        >
          {description}
        </Text>

        {children}

        <Button rounded="2xl" {..._button} asChild alignSelf={["end", "start"]}>
          <ChakraLink {..._anchor} asChild>
            <Link {..._link!}>{actionText}</Link>
          </ChakraLink>
        </Button>
      </VStack>
    </Stack>
  );
}
