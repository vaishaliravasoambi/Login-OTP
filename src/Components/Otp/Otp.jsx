import React, { useState } from "react";
import "./Otp.css";
import { useHistory } from "react-router";
export default function Otp(props) {
  const [input, setInput] = useState({ Otp: "" });
  const [errormsg, Seterrormsg] = useState("");
  let history = useHistory();
  if (history.location.state === undefined) {
    props.history.push({
      pathname: "/",
      state: {
        number: undefined
      }
    });
  }
  // ceck otp validation
  //if otp is even length navigate to success page
  //if otp is odd length navigate to invalid otp page
  const handleSubmit = () => {
    if (input.otp === "") {
      Seterrormsg("All fields are mandatory");
    } else if (input.otp.length % 2 === 0 && input.otp.length === 6) {
      props.history.push({
        pathname: "/Success",
        state: {
          number: "" + history.location.state.number
        }
      });
    } else {
      Seterrormsg("Invalid OTP");
      props.history.push("/Invalid");
    }
  };
  return (
    <>
      <div className="main">
        <div className="box">
          <h4 className="border">Enter the code</h4>
          <h3>
            {/* prop passed from login page to otp page mobile number should display */}
            <i>
              Verification code sent to your Mobile-Number{" "}
              {history.location.state.number}
            </i>
          </h3>

          {/* input box html */}
          <div className="input">
            OTP:
            <input
              type="text"
              name="number"
              data-testid="otp"
              value={input.otp}
              onChange={(e) => {
                let usercopy = { ...input };
                usercopy.otp = e.target.value;
                setInput(usercopy);
              }}
            />
          </div>
          {/* verify otp button html */}
          <div className="button">
            <button data-testid="submit" onClick={handleSubmit}>
              Verify OTP
            </button>
          </div>
          <p style={{ color: "red" }}>{errormsg}</p>
          <h4>
            Didn't get the code?{" "}
            <span style={{ color: "#82b2ff" }}>Click Here</span>
          </h4>
        </div>
      </div>
    </>
  );
}
