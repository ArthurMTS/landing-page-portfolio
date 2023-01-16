import React from "react";
import styles from "./PageContainer.styles";

interface PageContainerProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  id,
  className,
}) => {
  const { PageContainerStyled } = styles();

  return (
    <PageContainerStyled id={id} className={className}>
      {children}
    </PageContainerStyled>
  );
};
