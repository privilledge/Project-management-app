import { Row, Col } from "react-bootstrap";
import Searchbar from "./Searchbar";
import Icon from "./Icon";

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <Row>
          {" "}
          <Col md={5}>
            <Searchbar />
          </Col>
          <Col md={5}></Col>
          <Col md={2}>
            <Icon />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default TopBar;
