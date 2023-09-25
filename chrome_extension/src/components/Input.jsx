import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Input({ text, flag }) {
  return flag % 2 === 1 ? (
    <div id="input-box" className="container">
      <Container flex className=''>
          <Row className= "">
            <Col>
            test col 1
            </Col>

            <Col>
                          <div>
                <p>{text}</p>
              </div>

            </Col>
          </Row>
      </Container>

    </div>
  ) : (
    ""
  );
}

export default Input;
