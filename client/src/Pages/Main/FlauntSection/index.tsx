import { Container, Row, Col } from "reactstrap";
import {
  CardInner,
  FlauntCard,
  IconWrapper,
  SectionHeading,
  SectionWrapper,
  Separator,
} from "./styles";
import { flauntCards } from "./constants";

export default function FlauntSection() {
  return (
    <SectionWrapper>
      <Container>
        <Row className="padding-3 pad-top-6 pad-bottom-6 g-4">
          {flauntCards.map((item, index) => (
            <Col>
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
      </Container>
    </SectionWrapper>
  );
}
