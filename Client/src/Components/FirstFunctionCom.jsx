import React, { useState, useRef, useEffect } from "react";

export function FirstFunctionCom(props) {
  const prevCount = usePrevious(props.count);

  return (
    <>
      <h1>
        Now: {props.count}, before: {prevCount}
      </h1>
    </>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
