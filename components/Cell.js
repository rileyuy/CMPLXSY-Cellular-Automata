import { useState, useEffect } from "react";

export default function Cell({
  key,
  columnCell,
  col,
  row,
  inputRow,
  changeInputRow,
}) {
//   console.log(inputRow);
  function getInputRow() {
    let tempInputRow = inputRow;
  console.log(tempInputRow);

    if (row === 0) {
      if (tempInputRow[col] === "0") tempInputRow[col] = "1";
      else tempInputRow[col] = "0";
    }

    return tempInputRow;
  }
  return (
    <div
      className={`border-1 border-black border w-fit ${
        columnCell === "1" ? "bg-black" : "bg-white"
      }`}
      onClick={() => {
        changeInputRow(getInputRow());
      }}
    >
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </div>
  );
}
