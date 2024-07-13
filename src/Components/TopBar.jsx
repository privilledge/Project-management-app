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
          <Col md={3}></Col>
          <Col md={4}>
            <Icon />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default TopBar;
