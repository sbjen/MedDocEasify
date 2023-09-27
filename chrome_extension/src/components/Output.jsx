import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import med from '../assets/med.png';


function NewlineText(props) {
  const text = props;
  const newText = text.split("\n").map((str) => <p>{str}</p>);

  return newText;
}

function Output({ text, flag }) {
  return flag % 2 === 0 ? (
    <div id="output-box" className=" ">
      <div id="output-box-div" className="">
        <div id="icon" className="">
          <p>
            <img style={{ width: "40px" }} src={med} alt="model image" />
          </p>
        </div>
        <div id="input-box-text" className="">
          {NewlineText(text)}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Output;
