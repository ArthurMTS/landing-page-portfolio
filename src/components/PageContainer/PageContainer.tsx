import React from "react";
import { PageContainerStyled } from "./PageContainer.styles";

interface PageContainerProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  id,
  className,
}) => (
  <PageContainerStyled id={id} className={className}>
    {children}
  </PageContainerStyled>
);
