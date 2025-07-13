import { merriweather, merriweatherSans, notoSans } from "@/lib/fonts";
import {
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaMessage,
  FaRegEnvelope,
  FaSquareXTwitter,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { ContactButtonGroup } from "@/components/contact";
import { CallToAction } from "@/components/cta";
import { AboutMeHeading, OwnerHeading } from "../about";

export function HeroSection() {
  return (
    <HStack w="100%" px={["5%", "8%"]} py={["1rem", "2rem"]}>
      <VStack alignItems={"start"}>
        <HStack justify="start" alignItems="center">
          <Heading
            className={merriweatherSans.className}
            fontSize={"lg"}
            lineHeight={"normal"}
            fontWeight={"thin"}
            as="h2"
            mr="1rem"
          >
            @raitucarp
          </Heading>
          <ContactButtonGroup />
        </HStack>
        <OwnerHeading fontSize={["2xl", "7xl"]} />
        <AboutMeHeading
          _highlight={{ query: "Developer" }}
          fontSize={["md", "2xl"]}
        />

        <CallToAction />
      </VStack>
    </HStack>
  );
}
