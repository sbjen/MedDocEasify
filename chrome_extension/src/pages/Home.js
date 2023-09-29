import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Scrollbar } from 'react-scrollbars-custom';
import Input from "../components/Input";
import Output from "../components/Output";
import Textarea from "@mui/joy/Textarea";
import { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const URL = "http://127.0.0.1:5000/";



// imput data format to model below
// const random_med_para =
//   "This RCT examined the efficacy of a manualized social intervention for children with HFASDs. Participants were randomly assigned to treatment or wait-list conditions. Treatment included instruction and therapeutic activities targeting social skills, face-emotion recognition, interest expansion, and interpretation of non-literal language. A response-cost program was applied to reduce problem behaviors and foster skills acquisition. Significant treatment effects were found for five of seven primary outcome measures (parent ratings and direct child measures). Secondary measures based on staff ratings (treatment group only) corroborated gains reported by parents. High levels of parent, child and staff satisfaction were reported, along with high levels of treatment fidelity. Standardized effect size estimates were primarily in the medium and large ranges and favored the treatment group.";

function Home() {
  const [count, setCount] = useState(1);
  // const [inpFlag, setInpflag] = useState(false);
  const [inputData, setInputData] = useState("");
  let [cards, setCards] = useState([

  ]);

  const getDataFromApi = async () => {
    await axios
      .post(URL + "test", { data: { paragraph: inputData } })
      .then((response) => {
        const text = inputData;

        // setInputData("");
        // setCount(count + 1);
        const outputText = String(response.data.payload);

        setCards([
          ...cards,
          {
            id: count,
            text: text,
          },

          {
            id: count + 1,
            text: outputText,
          },
        ]);
        setInputData("");
        setCount(count + 2);

        // console.log(response.data.payload);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputData(text);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form data submitted:", String(inputData));

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
    
    // setCount(count + 1);
    
    await setTimeout(getDataFromApi, "1000");
    
    // setInpflag(true);
  };
  
  return (


    <section>
 
      <div id="home" className="container">
        <div id="extra-20"></div>
        <div id="nav">
          <div>MedDocEasify</div>
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

                
                 
       

                    '&:focus': {
                      outline: 'none', // Remove the blue outline on focus
                      border: 'none',  // Remove the border on focus
                      background:"red"
                    }
                  
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
