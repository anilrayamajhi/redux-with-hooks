import React from "react";
import { useTheme } from "@material-ui/core";

function Footer() {
  return (
    <footer>
      Made by{" "}
      <a
        className="underline copyright-link"
        href="https://endertech.com"
        target="blank"
      >
        Endertech
      </a>
    </footer>
  );
}

export default Footer;
