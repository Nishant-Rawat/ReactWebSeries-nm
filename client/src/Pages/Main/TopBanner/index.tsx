import { Container, Row, Col } from "reactstrap";
import BannerImage from "../../../Assets/images/logoImg.png";
import { DescText, SocialIcon, SocialWrapper } from "./styles";
import { socialObj } from "./constants";

export default function TopBanner() {
  return (
    <Container>
      <Row className="py-5">
        <Col className="d-flex justify-content-center flex-column">
          <div>
            <h1 className="fw-bold textSize-4 mb-0">Hy! I'm</h1>
            <h1 className="fw-bold textSize-4">
              <span className="text-primary">Nishant Rawat</span>
            </h1>
          </div>
          <DescText>
            I'm a skilled JavaScript Developer. I could be your one stop
            solution for all your UI needs. Do give a chance of service.
          </DescText>
          <SocialWrapper>
            {socialObj.map((item, index) => (
              <SocialIcon
                href={item?.link}
                target="_blank"
                color={item?.color}
                key={index}
              >
                {item?.icon}
              </SocialIcon>
            ))}
          </SocialWrapper>
        </Col>
        <Col>
          <img
            src={BannerImage}
            className="img-fluid"
            alt="Banner"
            style={{ height: "35rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
