import React from "react";
import Github from "assets/icons/Github.svg";
import Linkedin from "assets/icons/Linkedin.svg";
import { Img } from "./Icon.styles";

const Icons = {
  github: Github,
  linkedin: Linkedin,
};

interface IconProps {
  name: keyof typeof Icons;
  alt?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  alt,
  className
}) => {
  const Icon = Icons[name];

  return (
    <Img className={className} src={Icon} alt={alt} />
  );
};