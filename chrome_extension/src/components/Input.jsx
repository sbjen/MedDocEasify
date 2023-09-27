import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from '../assets/user.png';



function NewlineText(props) {
  const text = props;
  const newText = text.split("\n").map((str) => <p>{str}</p>);

  return newText;
}

function Input({ text, flag }) {
  return flag % 2 === 1 ? (
    <div id="input-box" className="container">
      <div id="input-box-div" className="">
        <div id="icon" className="">
          <p>
             <img style={{width:"40px"}} src= {user} alt="model image"/> 

             </p>
        </div>
        <div id="input-box-text" className="">{NewlineText(text)}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Input;
