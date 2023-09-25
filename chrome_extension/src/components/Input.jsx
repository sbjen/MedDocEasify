import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Input() {
  return (
    <div id="input-box" className="">
      <Container flex className=''>
          <Row className= " justify-content-center align-items-center">
            <Col  md={7}>
              <div>fd fdf</div>
            </Col>
            <Col md={7}>
              <div>
                <p>testing input box col2</p>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Input;
