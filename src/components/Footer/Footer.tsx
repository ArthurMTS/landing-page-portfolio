import { Icon } from "components/Icon";
import React from "react";
import useStyles from "./Footer.styles";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { FooterWrapper, FooterCopy, FooterLink, FooterIcons } = useStyles();

  return (
    <FooterWrapper>
      <FooterCopy>
        &copy; {year} -&nbsp;
        <FooterLink href="https://github.com/ArthurMTS" target="_blank">
          ArthurMTS
        </FooterLink>
      </FooterCopy>
      <FooterIcons>
        <FooterLink href="https://github.com/ArthurMTS" target="_blank">
          <Icon name="github" />
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/arthur-silva-24736320a/"
          target="_blank"
        >
          <Icon name="linkedin" />
        </FooterLink>
      </FooterIcons>
    </FooterWrapper>
  );
};
