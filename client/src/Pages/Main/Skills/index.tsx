import { Col, Container, Row } from "reactstrap";
import { skillsArr } from "./constants";
import {
  SectionHeading,
  SectionWrapper,
  Separator,
  IconWrapper,
  TitleWrapper,
  DescWrapper,
} from "./styles";

export default function Skills() {
  return (
    <SectionWrapper>
      <SectionHeading>Competency</SectionHeading>
      <Separator />
      <Container>
        <Row className="g-5">
          {skillsArr.map((item, index) => (
            <Col
              md="4"
              key={index}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              {item?.icon && (
                <IconWrapper color={item?.iconColor}>{item?.icon}</IconWrapper>
              )}
              {<TitleWrapper>{item?.title}</TitleWrapper>}
              {item?.description && (
                <DescWrapper>{item?.description}</DescWrapper>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
}
