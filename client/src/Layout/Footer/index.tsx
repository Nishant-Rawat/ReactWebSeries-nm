import { Container, Row, Col } from "reactstrap";
import footerImage from "../../Assets/images/foot.jpg";
import { Name, SocialIcon, SocialWrapper, MadeIn } from "./styles";
import { BsFillHeartFill } from "react-icons/bs";
import { socialObj } from "./constants";

const Footer = () => {
  return (
    <Container className="pt-5 mt-5">
      <Row>
        <Col className="d-flex justify-content-start align-items-center flex-column">
          <Name>Nishant Rawat</Name>
          <MadeIn>
            Made With <BsFillHeartFill className="text-danger" /> from India.
          </MadeIn>
        </Col>
        <Col className="d-flex justify-content-end align-items-center flex-column">
          <Name>Find me here</Name>
          <SocialWrapper>
            {socialObj.map((item, index) => (
              <SocialIcon color={item?.color} key={index}>
                {item?.icon}
              </SocialIcon>
            ))}
          </SocialWrapper>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={footerImage} className="img-fluid" alt="Footer" />
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
