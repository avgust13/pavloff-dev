import type React from "react";
import type { FC } from "react";
import * as SiIcons from "react-icons/si";
import styled from "styled-components";

type SkillIconProps = {
  name: string | keyof typeof SiIcons;
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

const FallbackLabel = styled.span`
  font-size: 0.875rem;
  color: #a6bbcc;
  text-align: center;
  padding: 12px;
`;

const SkillIcon: FC<SkillIconProps> = ({
  name,
  title,
  size = 40,
  color = "#A6BBCC",
}) => {
  const iconName = `Si${name}` as keyof typeof SiIcons;
  const IconComponent = SiIcons[name as keyof typeof SiIcons] || SiIcons[iconName];
  return (
    <IconWrapper>
      {IconComponent ? (
        <>
          <IconComponent size={size} color={color} title={title || name} />
          {title && <IconLabel>{title}</IconLabel>}
        </>
      ) : (
        <FallbackLabel>{title || name}</FallbackLabel>
      )}
    </IconWrapper>
  );
};

export default SkillIcon;
