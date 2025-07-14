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
      w={{ base: "100%", lg: "70%" }}
      px={{ base: "1rem", lg: "3rem" }}
      py={{ base: "5%", lg: "2%" }}
      margin="0 auto"
      alignItems={"start"}
    >
      <Stack
        w="100%"
        separator={<StackSeparator />}
        direction={{ base: "column", lg: "row" }}
      >
        <Link passHref href="/">
          <OwnerHeading
            fontSize={{ base: "lg", lg: "2xl" }}
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
          fontSize={{ base: "xs", lg: "lg" }}
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
