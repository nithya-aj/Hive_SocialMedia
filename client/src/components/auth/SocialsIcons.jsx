import { BsApple } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import "../../pages/AuthPage/style.css";
import { AiOutlineGoogle } from "react-icons/ai";

const SocialsIcons = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div className="share google">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <AiOutlineGoogle
              style={{
                fontSize: "1.5rem",
              }}
            />
          </div>
        </div>
        <div className="share apple">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <BsApple
              style={{
                fontSize: "1.3rem",
              }}
            />
          </div>
        </div>
        <div className="share facebook">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <GrFacebookOption
              style={{
                fontSize: "1.3rem",
              }}
            />
          </div>
        </div>
      </div>
      <div className="divider">
        <span></span>
        <span>Or</span>
        <span></span>
      </div>
    </>
  );
};

export default SocialsIcons;
