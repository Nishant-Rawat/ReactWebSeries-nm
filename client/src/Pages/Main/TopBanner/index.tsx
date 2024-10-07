import { Container, Row, Col } from "reactstrap";
import BannerImage from "../../../Assets/images/logoImg.png";
import { DescText, SocialIcon, SocialWrapper } from "./styles";
import { socialObj } from "./constants";

export default function TopBanner() {
  return (
    <Container>
      <Row className="py-md-5 py-3">
        <Col
          sm="12"
          md=""
          className="d-flex justify-content-center flex-column"
        >
          <div>
            <h1 className="fw-md-bold textSize-md-4 textSize-3 mb-0">
              Hy! I'm
            </h1>
            <h1 className="fw-md-bold textSize-md-4 textSize-3">
              <span className="text-primary">Nishant Rawat</span>
            </h1>
          </div>
          <DescText className="marg-bottom-1 marg-bottom-sm-0.5">
            A skilled JavaScript Developer with over 5 years of experience in
            building scalable and responsive web applications. I could be your
            one stop solution for all your UI needs. Do give a chance of
            service.
          </DescText>
          <SocialWrapper>
            {socialObj.map((item, index) => (
              <SocialIcon
                href={item?.link}
                target="_blank"
                color={item?.color}
                key={index}
                className="textSize-2"
              >
                {item?.icon}
              </SocialIcon>
            ))}
          </SocialWrapper>
        </Col>
        <Col className="d-none d-md-block">
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
