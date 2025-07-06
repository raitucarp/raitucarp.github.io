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
} from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { IconType } from "react-icons";
import { FaCodeCommit } from "react-icons/fa6";
import { FiGitBranch } from "react-icons/fi";

type ShowcaseParams = {
  title: string;
  description: string;
  actionText: string;

  Icon?: IconType;
  _button?: ButtonProps;
  _anchor?: AnchorProps;
  _link?: LinkProps;
};

export function Showcase({
  title,
  description,
  actionText,
  Icon,
  _anchor,
  _link,
  _button,
}: ShowcaseParams) {
  return (
    <HStack
      justify="start"
      alignSelf={"center"}
      separator={<StackSeparator />}
      gap="2rem"
      px="8%"
      w="80%"
    >
      <VStack flex={1} alignItems={"end"}>
        {Icon && (
          <Text as="span" fontSize="5xl">
            <Icon />
          </Text>
        )}
        <Heading
          fontSize="4xl"
          textAlign={"right"}
          lineHeight={"shorter"}
          wordWrap={"break-word"}
        >
          {title}
        </Heading>
      </VStack>
      <VStack flex={2} gap={"1rem"} alignItems={"start"}>
        <Text
          fontSize="2xl"
          className={notoSerif.className}
          fontWeight={"300"}
          textAlign={"left"}
        >
          {description}
        </Text>

        <Button rounded="2xl" {..._button} asChild>
          <ChakraLink {..._anchor} asChild>
            <Link {..._link!}>{actionText}</Link>
          </ChakraLink>
        </Button>
      </VStack>
    </HStack>
  );
}
