import { HeroSection } from "@/components/sections/hero";
import { Showcase } from "@/components/sections/showcase";
import { ColorModeButton } from "@/components/ui/color-mode";
import { VStack } from "@chakra-ui/react";
import { FaBrain } from "react-icons/fa6";
import { FiBookOpen, FiCode, FiFileText, FiGitBranch } from "react-icons/fi";

export default function Home() {
  return (
    <VStack
      w="100%"
      flex={1}
      py={"2rem"}
      h="100%"
      bgGradient={"to-br"}
      gradientFrom={"bg"}
      gradientTo={"bg.muted"}
      gap={"3rem"}
      alignItems={"start"}
    >
      <HeroSection />
      <Showcase
        title={`Projects I'm currently working on`}
        description={`Library and software, both open-source or commercial, my upcoming book
          and unpublished papers. Every project that I crafted with curiosity in
          mind.`}
        actionText={"explore"}
        _button={{
          colorPalette: "cyan",
          variant: "outline",
        }}
        Icon={FiCode}
        _link={{ href: "/projects" }}
      />
      <Showcase
        title={`Reading list`}
        description={`Articles or books I recommend. Also brief commentary from me why it's good.`}
        actionText={"see recommendations"}
        Icon={FiBookOpen}
        _button={{
          colorPalette: "red",
          variant: "outline",
        }}
        _link={{ href: "/reading" }}
      />

      <Showcase
        title={`Micro thought`}
        description={`Short-form thought by me, replacement of tweeting`}
        actionText={"browse"}
        Icon={FaBrain}
        _button={{
          colorPalette: "pink",
          variant: "outline",
        }}
        _link={{ href: "/projects" }}
      />

      <Showcase
        title={`List of posts`}
        description={`Medium or long form written text including opinion, idea, random-thought, to express my mind.`}
        actionText={"browse"}
        Icon={FiFileText}
        _button={{
          colorPalette: "blue",
          variant: "outline",
        }}
        _link={{ href: "/projects" }}
      />

      <Showcase
        title={`Commit history`}
        description={`Visual commit history of personal repo github.com/raitucarp/raitucarp.`}
        actionText={"view commit"}
        _button={{
          variant: "outline",
          colorPalette: "green",
        }}
        Icon={FiGitBranch}
        _link={{ href: "/commit" }}
      />
      <ColorModeButton
        position="fixed"
        top="1rem"
        right="1rem"
        variant="subtle"
        rounded="full"
      />
    </VStack>
  );
}
