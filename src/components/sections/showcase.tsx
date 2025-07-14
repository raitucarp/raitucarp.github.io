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
      gap={{ base: "1rem", lg: "2rem" }}
      px={{ base: "5%", lg: "8%" }}
      w={{ base: "100%", lg: "80%" }}
      direction={{ base: "column", lg: "row" }}
    >
      <Stack
        w={{ base: "100%", lg: "40%" }}
        alignItems={{ base: "center", lg: "end" }}
        direction={{ base: "row", lg: "column" }}
      >
        {Icon && (
          <Text as="span" fontSize={{ base: "2xl", lg: "5xl" }}>
            <Icon />
          </Text>
        )}
        <Heading
          fontSize={{ base: "xl", lg: "4xl" }}
          textAlign={{ base: "left", lg: "right" }}
          lineHeight={"shorter"}
          wordWrap={"break-word"}
        >
          {title}
        </Heading>
      </Stack>
      <VStack w={{ base: "100%", lg: "60%" }} gap={"1rem"} alignItems={"start"}>
        <Text
          fontSize={{ base: "md", lg: "2xl" }}
          className={notoSerif.className}
          fontWeight={"300"}
          textAlign={"left"}
        >
          {description}
        </Text>

        {children}

        <Button
          rounded="2xl"
          {..._button}
          asChild
          alignSelf={{ base: "end", lg: "start" }}
        >
          <ChakraLink {..._anchor} asChild>
            <Link {..._link!}>{actionText}</Link>
          </ChakraLink>
        </Button>
      </VStack>
    </Stack>
  );
}
