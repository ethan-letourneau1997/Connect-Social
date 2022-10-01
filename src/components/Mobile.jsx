import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHouse,
  faUser,
  faImage,
  faNewspaper,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";

// state for bottom navigation bar
export default function Mobile() {
  const [value, setValue] = React.useState(0);

  return (
    <Container className="mobile-container d-lg-none">
      <Row>
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
      </Row>
      <Row className="mobile-search-row">
        <Col md="auto">
          <div className="icon"></div>
        </Col>
        <Col className="mobile-search-bar-col">
          <input className="mobile-search-bar" placeholder="Say Something!" />
        </Col>
      </Row>

      <Row className="mobile-post">
        <Row className="mobile-poster">
          <Col md="auto" className="mobile-post-head">
            <span className="icon post1 mobile-icon"></span>
          </Col>
          <Col>
            <strong>Daniel A. Reynolds</strong>
            <div className="small">15 minutes ago</div>
          </Col>
        </Row>
        <Row className="mob-post-text">
          <p>What an amazing trip! My home away from home!</p>
        </Row>
        <Row className="mobile-photo-grid">
          <Col className="mob-image-col">
            <div className="left-mob"></div>
          </Col>
          <Col className="mob-image-col">
            <div className="right-top-mob"></div>
            <div className="right-bot-mob"></div>
          </Col>
        </Row>
      </Row>
      <Row className="mobile-text-only-post">
        <Row className="mobile-poster">
          <Col md="auto" className="mobile-post-head">
            <div className="icon girl1"></div>
          </Col>
          <Col>
            <strong>Maria Skeens</strong>&nbsp;&nbsp;
            <div className="small">37 minutes ago</div>
          </Col>
        </Row>
        <Row className="mob-post-text">
          <p>
            Some of my art will for sale tonight at the National's annual
            charity auction tonight! Bidding starts at 7!
          </p>
        </Row>
      </Row>
      <Row className="mobile-post mobile-bot-post">
        <Row className="mobile-poster">
          <Col md="auto">
            <div className="icon prof3 mobile-icon"></div>
          </Col>
          <Col>
            <div>
              <strong>Susan Schaffer</strong> &nbsp;&nbsp;
              <div className="small">2 hours ago</div>
            </div>
          </Col>
        </Row>

        <Row className="mob-post-text">
          <p>Never coming home!!!</p>
        </Row>
        <Row className="mobile-photo-grid">
          <Col className="mob-image-col">
            <div className="left-mob left-mob2"></div>
          </Col>
          <Col className="mob-image-col">
            <div className="right-top-mob right-top-mob2"></div>
            <div className="right-bot-mob right-bot-mob2"></div>
          </Col>
        </Row>
      </Row>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<FontAwesomeIcon icon={faHouse} />}
          />
          <BottomNavigationAction
            label="User"
            value="user"
            icon={<FontAwesomeIcon icon={faUser} />}
          />
          <BottomNavigationAction
            label="Photos"
            value="photos"
            icon={<FontAwesomeIcon icon={faImage} />}
          />
          <BottomNavigationAction
            label="Feed"
            value="news"
            icon={<FontAwesomeIcon icon={faNewspaper} />}
          />
          <BottomNavigationAction
            label="Settings"
            value="setting"
            icon={<FontAwesomeIcon icon={faGear} />}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
