import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function RightSide() {
  return (
    <Container>
      <Row className="request-row">
        <Row className="freind-request">
          <Row>
            <Col md="auto">
              <div className="icon prof2"></div>
            </Col>
            <Col>
              <strong>Chris Smith</strong> <span>wants to connect</span>
            </Col>
          </Row>
          <Row className="request-butn-row">
            <Col>
              <Button>Accept</Button>
            </Col>
            <Col>
              <Button className="decline-btn">Decline</Button>
            </Col>
          </Row>
        </Row>

        <Row className="freind-request">
          <Row>
            <Col md="auto">
              <div className="icon guy4"></div>
            </Col>
            <Col>
              <strong>Larry Larsen</strong> <span>wants to connect</span>
            </Col>
          </Row>
          <Row className="request-butn-row">
            <Col>
              <Button>Accept</Button>
            </Col>
            <Col>
              <Button className="decline-btn">Decline</Button>
            </Col>
          </Row>
        </Row>
      </Row>
      <Row>
        <strong className="section-title">Connections</strong>
      </Row>
      <Row className="contact-list">
        <Row>
          <Col md="auto">
            <div>
              <span className="icon prof3"></span>
            </div>
          </Col>
          <Col>
            <strong>Susan Schaffer</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <div className="icon guy3"></div>
          </Col>
          <Col>
            <strong>Raymond Gardner</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <div className="icon girl4"></div>
          </Col>
          <Col>
            <strong>Nancy Robinson</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <div className="icon guy1"></div>
          </Col>
          <Col>
            <strong>Grant Castillo</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <div className="icon guy5"></div>
          </Col>
          <Col>
            <strong>Brian Delacruz</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <div className="icon girl2"></div>
          </Col>
          <Col>
            <strong>Samantha Crothers</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <div className="icon girl1"></div>
          </Col>
          <Col>
            <strong>Maria Skeens</strong>
          </Col>
          <Col md="auto">
            <FontAwesomeIcon className="elipsis" icon={faEllipsis} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
