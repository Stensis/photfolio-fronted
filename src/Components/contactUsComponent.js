import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  const contactConfig = {
    YOUR_EMAIL: "irenenjuguna98@gmail.com",
    YOUR_PHONE: "+254791798403",
    description: "Photography firm",
    YOUR_SERVICE_ID: "3637382",
    YOUR_TEMPLATE_ID:
      "https://media.istockphoto.com/vectors/blue-graphic-employee-id-card-template-stock-illustration-indonesia-vector-id1237021701?k=20&m=1237021701&s=612x612&w=0&h=tD8iV-3-STUTsH54cPH81dnTynSao7F4mglci0mWVGw=",
    YOUR_USER_ID: "28930"
  };

  return (
    <Container>
      <Row className="mb-5 mt-5">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4 mt-5">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p className="h4 text-info mt-5">{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100 mt-5">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0 mt-3"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn btn-primary mt-5" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
