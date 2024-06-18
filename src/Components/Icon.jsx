import iconPic from "../assets/icon.jpg";
function Icon() {
  return (
    <>
      <div className="imageIcon">
        <img
          src={iconPic}
          style={{ width: "38px" }}
          className="icon-image mt-2"
          alt=""
        />
      </div>
    </>
  );
}
export default Icon;
