import styled from "styled-components";

export const DescText = styled.p`
  color: #999999;
  max-width: 35rem;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IconProps extends React.HTMLAttributes<HTMLAnchorElement> {
  color?: string;
}

export const SocialIcon = styled.a<IconProps>`
  margin-right: 1rem;
  color: ${(props) => props.color};
  cursor: pointer;
`;
