import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Cell from "./Cell";

export default function CellGrid({ cellCount = 16, rule = 110, isActive }) {
  const [cellOverride, setCellOverride] = useState(initializeCellOverride());

  console.log(cellOverride);

  function initializeCellOverride() {
    let tempArr = [];
    for (let i = 0; i < cellCount; i++) {
      tempArr.push("0");
    }
    return tempArr;
  }

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

    console.log(rules);
    console.log(substring);
    console.log(
      rules.findIndex((rule) => {
        return rule === substring;
      })
    );

    ruleValue = rules.findIndex((rule) => {
      return rule === substring;
    });
    console.log(ruleValue);

    return ruleString.charAt(ruleValue);
  }

  let gridData = [];
  var prevCells = [];

  for (let gridRow = 0; gridRow < cellCount; gridRow++) {
    let columnCells = [];
    for (let gridCol = 0; gridCol < cellCount; gridCol++) {
      if (gridRow === 0) {
        columnCells.push("0");
      } else {
        if (isActive) {
          let gridRowString = prevCells.join("");
          // console.log(gridRowString);
          let gridRowStringTemp = gridRowString;
          gridRowString =
            gridRowStringTemp.charAt(gridRowString.length - 1) +
            gridRowString +
            gridRowStringTemp.charAt(0);
          // console.log(gridRowString);

          if (gridCol === 0) {
            //special computation wtih invisivle cells on left and right
            console.log(gridRowString.slice(0, 3));

            columnCells.push(calculateRuleValue(gridRowString.slice(0, 3)));
          } else if (gridCol === cellCount - 1) {
            console.log(gridRowString.slice(-3, gridRowString.length));

            columnCells.push(
              calculateRuleValue(gridRowString.slice(-3, gridRowString.length))
            );
          } else {
            console.log(gridRowString.slice(gridCol, gridCol + 3));
            columnCells.push(
              calculateRuleValue(gridRowString.slice(gridCol, gridCol + 3))
            );
          }
        } else {
          columnCells.push("0");
        }
      }
    }
    gridData.push(columnCells);
    prevCells = columnCells;
    columnCells = [];
  }


  return (
    <div className="w-full h-full">
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
      {console.log(gridData)}
      {gridData.map((columns, i) => {
        // console.log (columns)
        return (
          <div className="flex flex-row w-full">
            {columns.map((columnCell, k) => (
              <Cell
                columnCell={columnCell}
                inputRow={cellOverride}
                changeInputRow={setCellOverride}
                row={i}
                col={k}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
