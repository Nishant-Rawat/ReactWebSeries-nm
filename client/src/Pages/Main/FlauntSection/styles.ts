import styled from "styled-components";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SectionWrapper = styled.div<SectionProps>`
  background-color: #f1f1f1;

  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    padding: 2rem 3rem 7rem 3rem;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 2rem 7rem 7rem 10rem;
  }
`;

export const SectionHeading = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
`;

export const SectionIntro = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 1rem;
`;

export const Separator = styled.div`
  width: 50%;
  height: 1px;
  margin: 1rem auto 2rem auto;
  background: #dcdcdc;
`;

interface CardProps {
  bgColor: string;
  color: string;
}

export const FlauntCard = styled.div<CardProps>`
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f1f1f1;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

interface InnerProps {
  width: string;
  height: string;
  opacity: string;
  top: string;
  right: string;
}

export const CardInner = styled.div<InnerProps>`
  background: #bcbcbc;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  opacity: ${(props) => props.opacity};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

export const IconWrapper = styled.div`
  font-size: 4rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #b5a1fc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
