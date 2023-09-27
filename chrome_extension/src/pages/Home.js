import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../components/Input";
import Output from "../components/Output";
import Textarea from "@mui/joy/Textarea";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Home() {
  const [count, setCount] = useState(1);
  // const [inpFlag, setInpflag] = useState(false);
  const [inputData, setInputData] = useState("");
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "INPUT test text",
    },
    {
      id: 2,
      text: "OUTPUT test text",
    },
  ]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputData(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", (String)(inputData));
    
    // const text = inputData.Replace("\r\n", "<br />\r\n");
    const text = inputData;
    setCards([
      ...cards,
      {
        id: count,
        text: text,
      },
    ]);
    setInputData("");
    setCount(count + 1);
    // setInpflag(true);
  };

  return (
    <section>
      <div id="home" className="container">
      <div id="extra-20"></div>
        <div id="nav">
          <div>

          MedDocEasify
          </div>
          
        </div>
        <div id="output-div">
          <div>
            {/* <ul> */}
            {cards.map((card) => {
              return (
                <section>
                  <div>
                    <Input text={card.text} flag={card.id}></Input>
                  </div>
                  <div>
                    <Output text={card.text} flag={card.id}></Output>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        <div id="input-div">
          <div className="text-area-container">
            <div className="input-field align-self-center">
              <Textarea
                multiline
                onChange={handleInputChange}
                name="text"
                value={inputData}
                sx={{
                  mb: 1,
                  // Width: "60vw",
                  // maxWidth: "70vw",
                  alignSelf: "center",
                  justifyContent: "center",
                  "--Textarea-focused": 0,
                  border: "0px",
                  borderRadius: 10,
                  paddingTop: "10px",
                  maxHeight: "40vh",

                  "&::before": {
                    border: "0px solid transparent",
                    borderColor: "transparent",
                  },
                  "&:focus-within::after": {
                    border: "0px",
                  },
                }}
                className="input-field"
                // name="Soft"
                placeholder="Type in here…"
                variant="soft"
              />
              <Button
                variant="dark"
                onClick={handleSubmit}
                endIcon={
                  <SendIcon style={{ width: "100px", height: "30px" }} />
                }
              ></Button>
            </div>
          </div>
          {/* </Col> */}
          {/* <Col></Col> */}
          {/* </Row>
          </Container> */}
        </div>

        <div id="extra"></div>
      </div>
    </section>
  );
}

export default Home;
