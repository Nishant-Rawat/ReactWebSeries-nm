import { Container, Row, Col } from "reactstrap";
import {
  CardInner,
  FlauntCard,
  IconWrapper,
  SectionHeading,
  SectionIntro,
  SectionWrapper,
  Separator,
} from "./styles";
import { flauntCards } from "./constants";

export default function FlauntSection() {
  return (
    <SectionWrapper id="preface">
      <Container>
        <SectionHeading>Preface</SectionHeading>
        <Separator />
        <Row className="g-5 justify-content-center mt-2">
          <Col md="7">
            <Row className="g-5">
              {flauntCards.map((item, index) => (
                <Col key={index} md="6">
                  <FlauntCard color={item?.color} bgColor={item?.bgColor}>
                    <IconWrapper>{item?.icon}</IconWrapper>
                    <div>
                      <h1>{item?.number}</h1>
                      <h4>{item?.title}</h4>
                    </div>
                    <CardInner
                      opacity="14%"
                      width="6rem"
                      height="6rem"
                      top="-13%"
                      right="-17%"
                    />
                    <CardInner
                      opacity="12%"
                      width="4rem"
                      height="4rem"
                      top="-2%"
                      right="-13%"
                    />
                  </FlauntCard>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md="4" className="d-flex justify-content-between flex-column">
            <SectionIntro>
              Greetings! I am a{" "}
              <span className="text-primary">27-year-old web developer</span>{" "}
              residing in the dynamic city of Bangalore, India. As a Computer
              Science Engineer, I am fortunate to be a part of the incredible
              team at Lenskart, where my passion for crafting exceptional user
              interfaces comes to life.
            </SectionIntro>
            <SectionIntro className="mb-0">
              Beyond the digital realm, I also embrace the role of a{" "}
              <span className="text-primary">
                CrossFit athlete and an adventurous traveler
              </span>
              , seeking new horizons and experiences.
            </SectionIntro>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
