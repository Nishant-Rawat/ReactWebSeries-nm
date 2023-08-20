import styled from "styled-components";

export const DescText = styled.p`
  color: #999999;
  max-width: 35rem;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IconProps {
  color?: string;
}

export const SocialIcon = styled.div<IconProps>`
  margin-right: 1rem;
  color: ${(props) => props.color};
  font-size: 2rem;
  cursor: pointer;
  transtion: font-size 3s ease;
  :hover {
    font-size: 3rem;
  }
`;
