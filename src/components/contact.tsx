import { ButtonGroup, IconButton } from "@chakra-ui/react";
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
      <IconButton roundedLeft={"full"}>
        <FaSquareXTwitter />
      </IconButton>
      <IconButton>
        <FaGithub />
      </IconButton>
      <IconButton>
        <FaRegEnvelope />
      </IconButton>
      <IconButton>
        <FaTelegram />
      </IconButton>
      <IconButton roundedRight={"full"}>
        <FaWhatsapp />
      </IconButton>
    </ButtonGroup>
  );
}
