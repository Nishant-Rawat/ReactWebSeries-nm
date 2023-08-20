import styled from "styled-components";

export const SectionWrapper = styled.div`
  padding: 4rem 10rem 7rem 10rem;
`;

export const SectionHeading = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
`;

export const Separator = styled.div`
  width: 50%;
  height: 1px;
  margin: 1rem auto 2rem auto;
  background: #dcdcdc;
`;

interface IconProps {
  color: string;
}

export const IconWrapper = styled.div<IconProps>`
  font-size: 4rem;
  color: ${(props) => props.color};
`;

export const TitleWrapper = styled.h3`
  color: #3d3d3d;
`;

export const DescWrapper = styled.p`
  text-align: center;
  width: 23rem;
`;
