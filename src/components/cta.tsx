import { Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaFileAlt, FaPenAlt } from "react-icons/fa";
import { FaFile, FaPage4, FaPerson, FaUser } from "react-icons/fa6";

export function CallToAction() {
  return (
    <HStack py={["1rem", "2rem"]}>
      <Button size={["md", "2xl"]} rounded={"full"} asChild>
        <Link href="/~">
          <FaFileAlt />
          List of posts
        </Link>
      </Button>
      <Button size={["md", "2xl"]} rounded={"full"} variant="outline" asChild>
        <Link href="/about">
          <FaUser />
          About me
        </Link>
      </Button>
    </HStack>
  );
}
