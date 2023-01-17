import React from "react";
import Github from "assets/icons/Github.svg";
import Linkedin from "assets/icons/Linkedin.svg";
import ChevronLeft from "assets/icons/ChevronLeft.svg";
import ChevronRight from "assets/icons/ChevronRight.svg";
import { Img } from "./Icon.styles";

const Icons = {
  github: Github,
  linkedin: Linkedin,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
};

interface IconProps {
  name: keyof typeof Icons;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  alt,
  className,
  onClick,
}) => {
  const Icon = Icons[name];

  return <Img onClick={onClick} className={className} src={Icon} alt={alt} />;
};
