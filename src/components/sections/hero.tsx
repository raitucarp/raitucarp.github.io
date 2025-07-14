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
    <HStack
      w="100%"
      px={{ base: "5%", lg: "8%" }}
      py={{ base: "1rem", lg: "2rem" }}
    >
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
        <OwnerHeading fontSize={{ base: "2xl", lg: "7xl" }} />
        <AboutMeHeading
          _highlight={{ query: "Developer" }}
          fontSize={{ base: "md", lg: "2xl" }}
        />

        <CallToAction />
      </VStack>
    </HStack>
  );
}
