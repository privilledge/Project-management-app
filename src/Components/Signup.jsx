import { Link } from "react-router-dom";
import smallLogo from "../assets/smallLogo.png";
import { Col, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
function Signup() {
  const email = useSelector((state) => state.email);

  return (
    <>
      <div className="login-page ">
        <section className="w-95  d-flex justify-content-center pb-4 p-4">
          <form className="card log-in-card">
            <div data-mdb-input-init className="form-outline mb-4 text-center">
              <img src={smallLogo} alt="" className="logo" />
              <h5 className="mt-2 fw-bold">We have emailed you a code</h5>
            </div>
            <small>
              To complete your account setup, enter the code <br /> we have send
              to:
              <h6 className="fw-bold">{email}</h6>
            </small>
            <div
              data-mdb-input-init
              className="form-outline code-input mt-2 mb-4"
            >
              <Row>
                <Col md={3} sm={3} xs={3}>
                  {" "}
                  <input
                    type="number"
                    id="form2Example2"
                    className="form-control"
                  />
                </Col>
                <Col md={3} sm={3} xs={3}>
                  {" "}
                  <input
                    type="number"
                    id="form2Example2"
                    className="form-control"
                  />
                </Col>
                <Col md={3} sm={3} xs={3}>
                  {" "}
                  <input
                    type="number"
                    id="form2Example2"
                    className="form-control"
                  />
                </Col>
                <Col md={3} sm={3} xs={3}>
                  {" "}
                  <input type="number" className="form-control" />
                </Col>
              </Row>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <h6>Create username</h6>
              <input type="text" className="form-control" />
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <h6>Create Password</h6>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary btn-block mb-4 mt-3"
            >
              Verify
            </button>{" "}
            <hr />
            <small className="text-center ">
              Didn't receive email? <a href="#">Resend</a>,<br />{" "}
            </small>
          </form>
        </section>
      </div>
    </>
  );
}
export default Signup;
