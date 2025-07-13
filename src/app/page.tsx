import { HeroSection } from "@/components/sections/hero";
import { Showcase } from "@/components/sections/showcase";
import { ColorModeButton } from "@/components/ui/color-mode";
import { getLast } from "@/lib/api";
import { merriweather } from "@/lib/fonts";
import { List, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaBrain } from "react-icons/fa6";
import { FiBookOpen, FiCode, FiFileText, FiGitBranch } from "react-icons/fi";
import { GiMagicHat, GiMagickTrick, GiMagicSwirl } from "react-icons/gi";
import { PiGraphThin } from "react-icons/pi";

export default function Home() {
  const lastPosts = getLast(5);
  return (
    <VStack
      w="100%"
      flex={1}
      py={["1rem", "2rem"]}
      h="100%"
      bgGradient={"to-br"}
      gradientFrom={"bg"}
      gradientTo={"bg.muted"}
      gap={["1rem", "3rem"]}
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
        actionText={"more »"}
        Icon={FiFileText}
        _button={{
          colorPalette: "blue",
          variant: "outline",
        }}
        _link={{ href: "/~" }}
      >
        <List.Root listStylePosition={"inside"} fontSize={"sm"}>
          {lastPosts.map((post, key) => (
            <List.Item
              key={key}
              _marker={{ content: `"* "` }}
              className={merriweather.className}
              css={{
                "& a:hover": {
                  textDecor: "underline",
                },
              }}
            >
              <Link href={`/~/${post.slug}`}>{post.title}</Link>
            </List.Item>
          ))}
        </List.Root>
      </Showcase>

      <Showcase
        title={`Commit history`}
        description={`Visual commit history of personal repo of raitucarp.xyz`}
        actionText={"view commit"}
        _button={{
          variant: "outline",
          colorPalette: "green",
        }}
        Icon={FiGitBranch}
        _link={{ href: "/commit" }}
      />

      <Showcase
        title={`Node Sigils`}
        description={`Applied graph theory for magus. You can see your own sigils in playground.`}
        actionText={"visit playground"}
        _button={{
          variant: "outline",
          colorPalette: "blue",
        }}
        Icon={PiGraphThin}
        _link={{ href: "/sigil" }}
      />
    </VStack>
  );
}
