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

export function HeroSection() {
  return (
    <HStack w="100%" px="8%" py={"2rem"}>
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
        <Heading
          className={merriweather.className}
          fontSize={"7xl"}
          lineHeight={"normal"}
          as="h1"
        >
          <Text as="span" fontWeight={"400"}>
            Hi, I'm Ribhararnus
          </Text>
          <Text
            as="span"
            color={{ _dark: "yellow.400", base: "yellow.500" }}
            fontWeight={"300"}
          >
            {`<Pracutiar>`}
          </Text>
        </Heading>
        <Heading
          className={notoSans.className}
          fontSize={"2xl"}
          lineHeight={"normal"}
          as="h3"
          fontWeight={"300"}
        >
          Developer, Writer, Magus and Neurodivergent
        </Heading>

        <CallToAction />
      </VStack>
    </HStack>
  );
}
