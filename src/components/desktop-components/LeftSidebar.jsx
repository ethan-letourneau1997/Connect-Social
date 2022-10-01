import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faImage,
  faNewspaper,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function LeftSide() {
  return (
    <Container className="left-side">
      <Row className="account-row">
        <Col className="justify align" md="auto">
          <div className="icon"></div>
        </Col>
        <Col>
          <strong>George Sanders</strong>
          <div>@georgesanders</div>
        </Col>
      </Row>
      <Row className="options">
        <Row className="border-bottom">
          <Col md="auto">
            <FontAwesomeIcon icon={faHouse} />
          </Col>
          <Col>
            {" "}
            <span>Home</span>
          </Col>
        </Row>
        <Row className="border-bottom">
          <Col md="auto">
            <FontAwesomeIcon icon={faUser} />
          </Col>
          <Col>
            {" "}
            <span>People</span>
          </Col>
        </Row>
        <Row className="border-bottom">
          <Col md="auto">
            <FontAwesomeIcon icon={faImage} />
          </Col>
          <Col>
            {" "}
            <span>Photos</span>
          </Col>
        </Row>
        <Row className="border-bottom active">
          <Col md="auto">
            <FontAwesomeIcon icon={faNewspaper} />
          </Col>
          <Col>
            {" "}
            <span>News Feed</span>
          </Col>
        </Row>
        <Row className="border-bottom">
          <Col md="auto">
            <FontAwesomeIcon icon={faUser} />
          </Col>
          <Col>
            {" "}
            <span>Profile</span>
          </Col>
        </Row>
        <Row className="options-bottom">
          <Col md="auto">
            <FontAwesomeIcon icon={faGear} />
          </Col>
          <Col>
            {" "}
            <span>Settings</span>
          </Col>
        </Row>
      </Row>
      <Row>
        <strong className="section-title">Groups</strong>
      </Row>
      <Row className="groups">
        <Row>
          <div className="group group1 justify">
            <span>Dog Lovers</span>
          </div>
        </Row>
        <Row>
          <div className="group group2 justify">
            <span>Coaster Fans</span>
          </div>
        </Row>
        <Row>
          <div className="group group3 justify">
            <span>Wave Riders</span>
          </div>
        </Row>
      </Row>
    </Container>
  );
}
