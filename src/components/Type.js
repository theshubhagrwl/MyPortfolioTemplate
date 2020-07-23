import React from "react";
import Typed from "react-typed";
import { Typography } from "@material-ui/core";

export default function Type() {
  return (
    <Typography variant="h6">
      <Typed
        strings={[
          "I am a Programmer",
          "I am a Full Stack Developer",
          "I love Solving Problems",
          "I love Technology!",
        ]}
        typeSpeed={65}
        smartBackspace={true}
        startDelay={1800}
        backDelay={500}
        backSpeed={50}
        // loop={true}
      />
    </Typography>
  );
}
