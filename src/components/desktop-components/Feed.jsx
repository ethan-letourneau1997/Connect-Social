import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Feed() {
  return (
    <Container fluid className="feed">
      <Row className="articles">
        <Col>
          <div className="story-card add-story">
            <FontAwesomeIcon className="fa-plus" icon={faPlus} />
            <span>Add Story</span>
          </div>
        </Col>
        <Col>
          <div className="story-card story1">
            <div className="icon guy1"></div>
          </div>
        </Col>
        <Col>
          <div className="story-card story2">
            <div className="icon prof3"></div>
          </div>
        </Col>
        <Col>
          <div className="story-card story3">
            <div className="icon girl4"></div>
          </div>
        </Col>
        <Col className="d-lg-none d-xl-block">
          <div className="story-card story4">
            <div className="icon girl1"></div>
          </div>
        </Col>
      </Row>
      <Row className="search-row">
        <Col md="auto">
          <div className="icon"></div>
        </Col>
        <Col className="search-bar-col justify">
          <input className="search-bar" placeholder="Say Something!" />
        </Col>

        <Col md="auto">
          <Button>Post</Button>
        </Col>
      </Row>

      <Row className="post">
        <Row className="poster">
          <Col md="auto">
            <div className="icon post1"></div>
          </Col>
          <Col>
            <div>
              <strong>Daniel A. Reynolds</strong>
            </div>
            <div className="small">15 minutes ago</div>
          </Col>
        </Row>
        <Row className="post-text">
          <p>What an amazing trip! My home away from home!</p>
        </Row>
        <Row className="photo-grid">
          <Col>
            <div className="left-pic"></div>
          </Col>
          <Col>
            <div className="top-right-pic"></div>
            <div className="bottom-right-pic"></div>
          </Col>
        </Row>
      </Row>
      <Row className="text-only-post">
        <Row className="poster">
          <Col md="auto">
            <div className="icon girl1"></div>
          </Col>
          <Col>
            <strong>Maria Skeens</strong>
            <div className="small">37 minutes ago</div>
          </Col>
        </Row>
        <Row className="post-text">
          <p>
            Some of my art will for sale tonight at the National's annual
            charity auction tonight! Bidding starts at 7!
          </p>
        </Row>
      </Row>
      <Row className="post">
        <Row className="poster">
          <Col md="auto">
            <div className="icon prof3"></div>
          </Col>
          <Col>
            <div>
              <strong>Susan Schaffer</strong>
            </div>
            <div className="small">2 hours ago</div>
          </Col>
        </Row>
        <Row className="post-text">
          <p>Never coming home!!!</p>
        </Row>
        <Row className="photo-grid">
          <Col>
            <div className="left-pic left-pic2"></div>
          </Col>
          <Col>
            <div className="top-right-pic top-right-pic2"></div>
            <div className="bottom-right-pic bottom-right-pic2"></div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
