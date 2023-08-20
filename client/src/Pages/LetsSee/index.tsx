import { UncontrolledCarousel } from "reactstrap";
import { SectionWrapper, SectionHeading, Separator } from "./styles";
import { carouselItem } from "./constants";
import "./carousel.css";

export default function Meme() {
  return (
    <SectionWrapper>
      <SectionHeading>Just For Fun</SectionHeading>
      <Separator />
      <div style={{ height: "24rem" }}>
        <UncontrolledCarousel items={carouselItem} className="custom-tag" />
      </div>
    </SectionWrapper>
  );
}
