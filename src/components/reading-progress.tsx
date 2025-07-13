"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export function ReadingTimeProgressBar() {
  const { y } = useWindowScroll();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (y / totalHeight) * 100;
    setReadingProgress(progress);
  }, [y]);

  return (
    <Box
      position="fixed"
      top="0"
      height={"0.3rem"}
      bgColor={{ _dark: "blue.700", base: "blue.300" }}
      left="0"
      w={`${readingProgress}%`}
    />
  );
}
