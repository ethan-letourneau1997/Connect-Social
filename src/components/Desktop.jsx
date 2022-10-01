import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "./desktop-components/LeftSidebar";
import Feed from "./desktop-components/Feed";
import RightSide from "./desktop-components/RightSide";

export default function Desktop() {
  return (
    <Container className="body-container d-none d-lg-block" fluid>
      <Row>
        <Col xl={3} lg={3}>
          <LeftSide></LeftSide>
        </Col>
        <Col xl={6} lg={6}>
          <Feed />
        </Col>
        <Col xl={3} lg={3}>
          <RightSide />
        </Col>
      </Row>
    </Container>
  );
}
