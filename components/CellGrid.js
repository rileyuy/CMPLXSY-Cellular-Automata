import { Grid } from "@mui/material";

export default function CellGrid({ cellCount, rule, isActive, startCell }) {
  function decimalToBinary(dec) {
    return (dec >>> 0).toString(2);
  }

  function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  function calculateRuleValue(substring) {
    let rules = ["111", "110", "101", "100", "011", "010", "001", "000"];
    let ruleString = pad(decimalToBinary(rule), 8);
    let ruleValue = -1;

    ruleValue = rules.findIndex((rule) => {
      return rule === substring;
    });

    return ruleString.charAt(ruleValue);
  }

  let gridData = [];
  var prevCells = [];

  for (let gridRow = 0; gridRow < cellCount; gridRow++) {
    let columnCells = [];
    for (let gridCol = 0; gridCol < cellCount; gridCol++) {
      if (gridRow === 0) {
        if (startCell < cellCount){
          columnCells.push(gridCol === startCell ? "1" : "0");
        }
      } else {
        if (isActive) {
          let gridRowString = prevCells.join("");
          let gridRowStringTemp = gridRowString;
          gridRowString =
            gridRowStringTemp.charAt(gridRowString.length - 1) +
            gridRowString +
            gridRowStringTemp.charAt(0);

          if (gridCol === 0) {
            //special computation wtih invisivle cells on left and right
            columnCells.push(calculateRuleValue(gridRowString.slice(0, 3)));
          } else if (gridCol === cellCount - 1) {
            columnCells.push(
              calculateRuleValue(gridRowString.slice(-3, gridRowString.length))
            );
          } else {
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
    <div className="border border-[#2a1f2d] drop-shadow-xl">
      <Grid>
        {gridData.map((columns, i) => {
          return (
            <div key={i} className="flex flex-row w-full">
              {columns.map((columnCell, k) => (
                <Grid
                  className={`border border-[#2a1f2d] w-10 h-10 ${
                    columnCell === "1" ? "bg-[#2a1f2d]" : "bg-white"
                  }`}
                  key={i + k}
                />
              ))}
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
