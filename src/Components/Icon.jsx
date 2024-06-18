import iconPic from "../assets/icon.jpg";
function Icon() {
  return (
    <>
      <div className="imageIcon">
        <img
          src={iconPic}
          style={{ width: "43px" }}
          className="icon-image"
          alt=""
        />
      </div>
    </>
  );
}
export default Icon;
