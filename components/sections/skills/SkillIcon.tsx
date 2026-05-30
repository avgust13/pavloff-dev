import type { FC } from "react";
import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiOpenai,
  SiN8N,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiJest,
  SiGithubactions,
  SiGraphql,
  SiOpenapiinitiative,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import styled from "styled-components";

// Only the icons actually used on the site are imported, so the bundle
// no longer pulls in the entire react-icons/si set (~2 MB).
const ICONS: Record<string, IconType> = {
  Anthropic: SiAnthropic,
  Openai: SiOpenai,
  N8N: SiN8N,
  Langchain: SiLangchain,
  Tensorflow: SiTensorflow,
  Pytorch: SiPytorch,
  Scikitlearn: SiScikitlearn,
  Nodedotjs: SiNodedotjs,
  Python: SiPython,
  Dotnet: SiDotnet,
  Postgresql: SiPostgresql,
  Mongodb: SiMongodb,
  Redis: SiRedis,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Googlecloud: SiGooglecloud,
  Microsoftazure: VscAzure,
  React: SiReact,
  Typescript: SiTypescript,
  Nextdotjs: SiNextdotjs,
  Angular: SiAngular,
  Jest: SiJest,
  Githubactions: SiGithubactions,
  Graphql: SiGraphql,
  Openapi: SiOpenapiinitiative,
};

type SkillIconProps = {
  name: string;
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

const FallbackChip = styled.span`
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #a6bbcc;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #a6bbcc;
`;

const SkillIcon: FC<SkillIconProps> = ({
  name,
  title,
  size = 40,
  color = "#A6BBCC",
}) => {
  const IconComponent = ICONS[name];
  return (
    <IconWrapper>
      {IconComponent ? (
        <>
          <IconComponent size={size} color={color} title={title || name} />
          {title && <IconLabel>{title}</IconLabel>}
        </>
      ) : (
        <FallbackChip>{title || name}</FallbackChip>
      )}
    </IconWrapper>
  );
};

export default SkillIcon;
