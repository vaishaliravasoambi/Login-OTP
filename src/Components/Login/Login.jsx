import React, { useState } from "react";
import "./Login.css";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Login(props) {
  const [input, setInput] = useState({ phoneNumber: "" });
  const [errormsg, Seterrormsg] = useState("");

  const classes = useStyles();
  const [selection, setSelection] = React.useState("");

  //function to check input validation
  const handleSubmit = () => {
    if (input.phoneNumber === "" || selection === "") {
      Seterrormsg("All fields are mandatory");
    } else if (!input.phoneNumber.match(/^[0-9]*$/)) {
      Seterrormsg("Phone Number must contain only numbers");
    } else if (input.phoneNumber.length !== 10) {
      Seterrormsg("mobile number must be 10 digit");
    } else {
      Seterrormsg(`Hello ${input.phoneNumber}`);
      // props.fn(input.phoneNumber);

      props.history.push({
        pathname: "/otp",
        state: {
          number: "" + input.phoneNumber
        }
      });
      // <nav>
      // <Link to={{pathname:'/otp'}}> </Link>;
      // </nav>
    }
  };

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <h4 className="border">Log In With Your Mobile Phone</h4>
          <h3>
            <i>A code will be sent to your mobile phone number.</i>
          </h3>
          <div className="wrap">
            {/* Drop down  Html */}
            <span className="drop-down">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Country code
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selection}
                  onChange={handleChange}
                >
                  <MenuItem value={+91}>+91</MenuItem>
                  <MenuItem value={+92}>+92</MenuItem>
                  <MenuItem value={+1}>+1</MenuItem>
                  <MenuItem value={+44}>+44</MenuItem>
                </Select>
              </FormControl>
            </span>
            {/* input box html */}
            <div className="input">
              <input
                type="text"
                name="number"
                data-testid="phoneNumber"
                value={input.phoneNumber}
                onChange={(e) => {
                  let usercopy = { ...input };
                  usercopy.phoneNumber = e.target.value;
                  setInput(usercopy);
                }}
              />
            </div>
          </div>
          {/* submit mobile number button */}
          <div className="button">
            <button data-testid="submit" onClick={handleSubmit}>
              Get The Code
            </button>
          </div>
          <p style={{ color: "red" }}>{errormsg} </p>
        </div>
      </div>
    </>
  );
}
