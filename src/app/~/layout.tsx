import { AboutMeHeading, OwnerHeading } from "@/components/about";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  Breadcrumb,
  Container,
  HStack,
  IconButton,
  Stack,
  StackSeparator,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VStack
      as="main"
      w={["100%", "70%"]}
      px={["1rem", "3rem"]}
      py={["5%", "2%"]}
      margin="0 auto"
      alignItems={"start"}
    >
      <Stack
        w="100%"
        separator={<StackSeparator />}
        direction={["column", "row"]}
      >
        <Link passHref href="/">
          <OwnerHeading
            fontSize={["lg", "2xl"]}
            _hover={{
              textDecor: "underline",
              textDecorationThickness: "0.01rem",
            }}
            _highlight={{
              styles: {
                color: { _dark: "blue.400", base: "blue.500" },
                fontWeight: 300,
              },
            }}
          />{" "}
        </Link>
        <AboutMeHeading
          fontSize={["xs", "lg"]}
          _highlight={{
            query: "Writer",
            styles: { color: { _dark: "blue.400", base: "blue.500" } },
          }}
          fontStyle={"italic"}
        />
      </Stack>

      {children}
    </VStack>
  );
}
