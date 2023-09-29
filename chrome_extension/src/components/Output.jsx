// import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import med from "../assets/med.png";

function NewlineText(props) {
  const text = props;
  const output_class_name = ['Outline the significance of this medical article. :', 'primary aim of this medical article:','Approaches employed:','Implications from the medical study:', 'Key takeaways from the medical article:'  ]
  const test = ['Outline', 'primary','Approaches','Implications', 'Key'  ]
  

  const newText = text.split("\n").map((str) => (
    <span>
      
     
      {test.includes(str.split(" ")[0]) ? (
        <p>
          {console.log(str)}
          <h3>

          <b>{str}</b>
          </h3>
        </p>
      ) : (
        ""
      )}
    
      {!test.includes(str.split(" ")[0]) ? <p>{str}</p> : ""}

      {/* <p>{str}</p> */}
    </span>
  ));

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
