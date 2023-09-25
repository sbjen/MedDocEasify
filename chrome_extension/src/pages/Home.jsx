import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../components/Input";
import Output from "../components/Output";
import Textarea from "@mui/joy/Textarea";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { dark } from "@mui/material/styles/createPalette";

function home() {
  return (
    <section>
      <div id="home" className="container">
        <div id="output-div">output</div>
        <div id="input-div">
          {/* <Container fluid>
            <Row fluid>
              <Col md={2}> */}
                <div className="text-area-container" >
                  <div className="input-field align-self-center">
                    <Textarea
                      sx={{
                        mb: 1,
                        // Width: "60vw",
                        // maxWidth: "70vw",
                        alignSelf: "center",
                        justifyContent: "center",
                        "--Textarea-focused": 0,
                        border: "0px",
                        borderRadius:10 ,
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
                      name="Soft"
                      placeholder="Type in here…"
                      variant="soft"
                    />
                    <Button
                      sx={{}}
                      variant="dark"
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
      </div>

      {/* <Container id="home" className="">
      <Row className="">
        <p>
            output row
        </p>

      </Row>

      <Row  className="">

        <div>text division</div>
      </Row>
    </Container> */}
    </section>
  );
}

export default home;
