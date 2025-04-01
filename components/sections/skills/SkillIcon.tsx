import type React from "react";
import * as SiIcons from "react-icons/si";
import styled from "styled-components";

type SkillIconProps = {
  name: keyof typeof SiIcons;
  title?: string;
  size?: number;
  color?: string;
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min-content;
  text-align: center;
  margin: 8px;

  @media (max-width: 768px) {
    margin: 6px;
  }
`;

const IconLabel = styled.span`
  margin-top: 6px;
  font-size: 0.75rem;
  color: #a6bbcc;
`;

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  title,
  size = 40,
  color = "#A6BBCC",
}) => {
  const IconComponent = SiIcons[name];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found in react-icons/si`);
    return null;
  }

  return (
    <IconWrapper>
      <IconComponent size={size} color={color} title={title || name} />
      {title && <IconLabel>{title}</IconLabel>}
    </IconWrapper>
  );
};

export default SkillIcon;
