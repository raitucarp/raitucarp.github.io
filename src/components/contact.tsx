import { ownerData } from "@/fixtures/general";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaSquareXTwitter,
  FaGithub,
  FaRegEnvelope,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

export function ContactButtonGroup() {
  return (
    <ButtonGroup size="sm" variant="subtle" rounded="full" attached>
      <IconButton roundedLeft={"full"} asChild>
        <Link href={ownerData.social.x} target="_blank">
          <FaSquareXTwitter />
        </Link>
      </IconButton>
      <IconButton asChild>
        <Link href={ownerData.social.github} target="_blank">
          <FaGithub />
        </Link>
      </IconButton>
      <IconButton asChild>
        <Link href={ownerData.social.email} target="_blank">
          <FaRegEnvelope />
        </Link>
      </IconButton>
      <IconButton asChild>
        <Link href={ownerData.social.telegram} target="_blank">
          <FaTelegram />
        </Link>
      </IconButton>
      <IconButton roundedRight={"full"}>
        <Link href={ownerData.social.whatsapp} target="_blank">
          <FaWhatsapp />
        </Link>
      </IconButton>
    </ButtonGroup>
  );
}
