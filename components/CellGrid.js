import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function CellGrid({ cellCount = 16, rule = 110, isActive }) {
  // console.log(cellCount);
  // console.log(rule);
  // console.log(isActive);
  function decimalToBinary(dec) {
    return (dec >>> 0).toString(2);
  }

  function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  function calculateRuleValue(substring) {
    // console.log("Substring: " + substring);
    let rules = ["111", "110", "101", "100", "011", "010", "001", "000"];
    let ruleString = pad(decimalToBinary(rule), 8);
    let ruleValue = -1;

    ruleValue = rules.find((rule, index) => {
      if (rule === substring) return index;
    });

    return ruleString.charAt(ruleValue);
  }

  let gridData = [];
  var prevCells = [];

  for (let gridRow = 0; gridRow < cellCount; gridRow++) {
    let columnCells = [];
    for (let gridCol = 0; gridCol < cellCount; gridCol++) {
      if (gridRow === 0) {
        columnCells.push(gridCol === Math.ceil(cellCount / 2) ? 1 : 0);
      } else {
        // console.log ("checking...")
        if (isActive) {
          // console.log(gridRow);
          // console.log("active...");
          let gridRowString = prevCells.join("");
          // console.log(gridRowString);

          gridRowString = "0" + gridRowString + "0";
          if (gridCol === 0) {
            //special computation wtih invisivle cells on left and right

            columnCells.push(calculateRuleValue(gridRowString.slice(0, 2)));
          } else if (gridCol === cellCount - 1) {
            columnCells.push(
              calculateRuleValue(
                gridRowString.slice(
                  gridRowString.length - 3,
                  gridRowString.length - 1
                )
              )
            );
          } else {
            columnCells.push(
              calculateRuleValue(gridRowString.slice(1 + gridCol, 2 + gridCol))
            );
          }
        } else {
          columnCells.push(0);
        }
      }
    }
    gridData.push(columnCells);
    prevCells = columnCells;
    columnCells = [];
  }

  return (
    <Grid container spacing={5} className="w-full h-full">
      {/* {colData.map((colComponent, i) => {
        console.log("Row number: " + i);
        return (
          <div className="w-fit">
            {rowData.map((rowComponent, k) => {
              console.log("Col number: " + k);
              return colComponent;
            })}
          </div>
        );
      })} */}
      {/* {gridData.map((columns, i) => {
        return (
          <div className="w-fit">{columns.map((columnCell) => columnCell)}</div>
        );
      })} */}

      {gridData.map((columns, i) => {
        // console.log (columns)
        return (
          <div className="flex flex-row w-full">
            {columns.map((columnCell) => (
              <Grid
                item
                className={`border-1 border-black border w-fit ${
                  columnCell === 1 ? "bg-black" : "bg-white"
                }`}
              >
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </Grid>
            ))}
          </div>
        );
      })}
    </Grid>
  );
}
