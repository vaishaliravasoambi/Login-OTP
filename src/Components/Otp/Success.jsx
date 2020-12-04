import React from "react";
import { useHistory } from "react-router";
export default function Success(props) {
  // use history and /success url  directly should not work
  //if user put /success directly it navigates to login page
  let history = useHistory();
  if (history.location.state === undefined) {
    props.history.push({
      pathname: "/",
      state: {
        number: undefined
      }
    });
  }
  return (
    <>
      <h1 style={{ color: "green" }}>
        Hello,Your phone number is successfully verified!
      </h1>
    </>
  );
}
