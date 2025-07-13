import { ownerData } from "@/fixtures/general";
import { merriweather, notoSans } from "@/lib/fonts";
import {
  Heading,
  HeadingProps,
  Highlight,
  HighlightProps,
  Text,
} from "@chakra-ui/react";

export function OwnerHeading(
  headingProps: HeadingProps & {
    _highlight?: Omit<HighlightProps, "children" | "query">;
  }
) {
  const name = `Hi, I'm ${ownerData.name.first}<${ownerData.name.last}>`;
  return (
    <Heading
      className={merriweather.className}
      fontSize={"7xl"}
      lineHeight={"normal"}
      as="h1"
      {...headingProps}
    >
      <Highlight
        styles={{
          color: { _dark: "yellow.400", base: "yellow.500" },
          fontWeight: 300,
        }}
        {...headingProps._highlight}
        query={`<${ownerData.name.last}>`}
      >
        {name}
      </Highlight>
    </Heading>
  );
}

export function AboutMeHeading(
  headingProps: HeadingProps & { _highlight?: Omit<HighlightProps, "children"> }
) {
  return (
    <Heading
      className={notoSans.className}
      fontSize={"2xl"}
      lineHeight={"normal"}
      as="h3"
      fontWeight={"300"}
      {...headingProps}
    >
      <Highlight
        styles={{
          color: { _dark: "yellow.400", base: "yellow.500" },
          fontWeight: "bold",
        }}
        {...headingProps._highlight!}
      >
        {ownerData.about.short}
      </Highlight>
    </Heading>
  );
}
