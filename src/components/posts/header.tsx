import { Author } from "@/interfaces/author";
import { Post } from "@/interfaces/post";
import { Badge, Heading, HeadingProps, HStack, Text } from "@chakra-ui/react";
import { format, formatDistance } from "date-fns";

type Props = Post & { _heading: HeadingProps };

export const PostHeader = ({
  title,
  stats,
  published: date,
  author,
  _heading,
}: Props) => {
  return (
    <>
      <Heading lineHeight={"short"} {..._heading}>
        {title}
      </Heading>
      <HStack>
        <Badge size={"lg"}>{author}</Badge>
        <Badge size={"lg"}>{stats?.text}</Badge>
        <Badge size={"lg"}>{format(date, "dd MMMM yyy")}</Badge>
        <Badge size={"lg"}>
          {formatDistance(new Date(), new Date(date), {
            addSuffix: true,
          })}
        </Badge>
      </HStack>
    </>
  );
};
