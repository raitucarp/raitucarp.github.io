import { Button, HStack } from "@chakra-ui/react";
import { FaFileAlt, FaPenAlt } from "react-icons/fa";
import { FaFile, FaPage4, FaPerson, FaUser } from "react-icons/fa6";

export function CallToAction() {
  return (
    <HStack py="2rem">
      <Button size={"2xl"} rounded={"full"}>
        <FaFileAlt />
        List of posts
      </Button>
      <Button size={"2xl"} rounded={"full"} variant="outline">
        <FaUser />
        About me
      </Button>
    </HStack>
  );
}
