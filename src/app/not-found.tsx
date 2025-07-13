import { OwnerHeading } from "@/components/about";
import { notoSans, notoSerif } from "@/lib/fonts";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <VStack w="100%" justify="center">
      <OwnerHeading
        fontSize={"3xl"}
        _highlight={{
          styles: { color: { _dark: "red.400", base: "red.500" } },
        }}
        className={notoSans.className}
      />
      <Text>Your page you're looking for is not found</Text>
      <Button
        colorPalette={"red"}
        asChild
        rounded="full"
        variant="ghost"
        size="md"
      >
        <Link href="/">back to /</Link>
      </Button>
    </VStack>
  );
}
