import { UncontrolledCarousel } from "reactstrap";
import {
  SectionWrapper,
  SectionHeading,
  Separator,
  ImageWrapper,
} from "./styles";
import { carouselItem } from "./constants";
import "./carousel.css";

export default function Meme() {
  return (
    <SectionWrapper>
      <SectionHeading>Just For Fun</SectionHeading>
      <Separator />
      <ImageWrapper>
        <UncontrolledCarousel items={carouselItem} className="custom-tag" />
      </ImageWrapper>
    </SectionWrapper>
  );
}
