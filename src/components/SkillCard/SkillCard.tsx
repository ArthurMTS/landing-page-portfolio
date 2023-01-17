import { CircularProgressWithLabel } from "components/CircularProgress";
import React from "react";
import useStyles from "./SkillCard.styles";

interface SkillCardProps {
  title: string;
  icon: string;
  url: string;
  progress: number;
  alt?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  url,
  progress,
  alt,
}) => {
  const { Card, Logo, Title, Link } = useStyles();

  return (
    <Card>
      <Logo src={icon} alt={alt} />
      <Title>{title}</Title>
      <CircularProgressWithLabel value={progress} />
      <Link href={url} target="_blank">
        Learn More
      </Link>
    </Card>
  );
};
