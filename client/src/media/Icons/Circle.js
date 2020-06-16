import * as React from "react";

function SvgCircle(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
    </svg>
  );
}

export default SvgCircle;
