import React, { useState, Component } from "react";
import { Modal } from "react-bootstrap";
import Dates from "./Dates";

function ModalNotification() {
  const [smShow, setSmShow] = useState(true);
  return (
    <>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#3A3B3C", color: "white" }}
        >
          <Modal.Title
            id="example-modal-sizes-title-sm"
            className="modal-title"
          >
            New Delhi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#3A3B3C" }}>
          <Dates />
        </Modal.Body>
        <div
          className="weather-info"
          style={{ backgroundColor: "white", height: "70px" }}
        >
          <div
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: "#bbb",
              borderRadius: "50%",
              marginLeft: "10px",
              marginTop: "14px",
            }}
          >
            <p style={{ marginLeft: "50px", fontWeight: "500" }}>WeatherApp</p>
            <p
              style={{
                marginLeft: "50px",
                fontWeight: "400",
                marginTop: "-14px",
                wordBreak: "keep-all",
              }}
            >
              CurrentTemperature:37°C
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalNotification;
