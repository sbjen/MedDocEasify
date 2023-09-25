import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function Output({ text, flag }) {
  return flag % 2 === 0 ? (
    <div id="output-box" className="full-width ">
      <p>{text}</p>
    </div>
  ) : (
    ""
  );
}

export default Output;
