import iconPic from "../assets/icon.jpg";
function Icon() {
  return (
    <>
      <div className="imageIcon">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="2.2em"
          width="2.2em"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-image mt-2"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* <img
          src={iconPic}
          style={{ width: "38px" }}
         
          alt=""
        /> */}
      </div>
    </>
  );
}
export default Icon;
