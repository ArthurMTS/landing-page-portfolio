import { Icon } from "components/Icon";
import React from "react";
import { FooterWrapper, FooterCopy, FooterLink, FooterIcons } from "./Footer.styles";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

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
        <FooterLink href="https://github.com/ArthurMTS" target="_blank">
          <Icon name="linkedin" />
        </FooterLink>
      </FooterIcons>
    </FooterWrapper>
  );
};