import React from "react";
import { FooterWrapper, FooterText, FooterAuthor } from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>
        Todos os direitos reservados &copy;
      </FooterText>
      <FooterAuthor href="https://github.com/ArthurMTS" target="_blank">
        ArthurMTS
      </FooterAuthor>
    </FooterWrapper>
  );
};
