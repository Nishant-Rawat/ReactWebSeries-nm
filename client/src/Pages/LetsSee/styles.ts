import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: #000;
  color: #fff;
  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    padding: 2rem 0rem 7rem 0rem;
    .custom-tag img {
      padding: 0;
      height: 28rem;
    }
    .custom-tag .carousel-inner {
      height: 31rem;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 2rem 10rem 5rem 10rem;
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: 575.98px) {
    height: 28rem;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 2rem 10rem 5rem 10rem;
  }
`;

export const SectionHeading = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Separator = styled.div`
  width: 50%;
  height: 1px;
  margin: 1rem auto 4rem auto;
  background: #dcdcdc;
`;
