import classNames from "classnames";

import styles from "../styles/_Fields.module.css";

const MIN_RULE_VALUE = 0;
const MAX_RULE_VALUE = 255;

const MIN_ROW_WIDTH = 1;
const MAX_ROW_WIDTH = 100;

export default function Fields({
  rule,
  setRule,
  cellCount,
  setCellCount,
  isActive,
  setIsActive,
  startCell,
  setStartCell,
}) {
  const MIN_START_CELL = 0;
  const MAX_START_CELL = cellCount-1;
  function handleFieldChange({ event, setValue, minValue, maxValue }) {
    setValue((currentValue) => {
      if (event?.target?.validity?.valid) {
        if (event?.target?.value > maxValue) return maxValue;
        else if (event?.target?.value < minValue) return minValue;
        else if (!event?.target?.value) return minValue;
        return event?.target?.value;
      } else return currentValue;
    });
  }

  function handleSpinnerClick({
    value,
    setValue,
    minValue,
    maxValue,
    operator,
  }) {
    switch (operator) {
      case "+":
        setValue((currentValue) => {
          if (value >= maxValue) return parseInt(value);
          return parseInt(currentValue) + 1;
        });
        break;
      case "-":
        setValue((currentValue) => {
          if (value <= minValue) return parseInt(value);
          return parseInt(currentValue) - 1;
        });
      default:
        break;
    }
  }

  return (
    <>
      <div className="flex flex-col gap-12 justify-center items-center">
        <div className="grid gap-8 xxs:grid-cols-1 md:grid-cols-2">
          <div className={classNames(styles["field-container"])}>
            <label>Rule</label>
            <div className="flex flex-row justify-center items-center gap-2">
              <input
                type="text"
                pattern="[0-9]*"
                value={rule}
                onChange={(event) =>
                  handleFieldChange({
                    event: event,
                    setValue: setRule,
                    minValue: MIN_RULE_VALUE,
                    maxValue: MAX_RULE_VALUE,
                  })
                }
              />
              <button
                className={classNames(styles["spinner-button"])}
                onClick={() =>
                  handleSpinnerClick({
                    value: rule,
                    setValue: setRule,
                    minValue: MIN_RULE_VALUE,
                    maxValue: MAX_RULE_VALUE,
                    operator: "-",
                  })
                }
              >
                -
              </button>
              <button
                className={classNames(styles["spinner-button"])}
                onClick={() =>
                  handleSpinnerClick({
                    value: rule,
                    setValue: setRule,
                    minValue: MIN_RULE_VALUE,
                    maxValue: MAX_RULE_VALUE,
                    operator: "+",
                  })
                }
              >
                +
              </button>
            </div>
          </div>
          <div className={classNames(styles["field-container"])}>
            <label>Grid Size</label>
            <div className="flex flex-row justify-center items-center gap-2">
              <input value={cellCount} disabled={true} />
              <button
                className={classNames(styles["spinner-button"])}
                onClick={() =>
                  handleSpinnerClick({
                    value: cellCount,
                    setValue: setCellCount,
                    minValue: MIN_ROW_WIDTH,
                    maxValue: MAX_ROW_WIDTH,
                    operator: "-",
                  })
                }
              >
                -
              </button>
              <button
                className={classNames(styles["spinner-button"])}
                onClick={() =>
                  handleSpinnerClick({
                    value: cellCount,
                    setValue: setCellCount,
                    minValue: MIN_ROW_WIDTH,
                    maxValue: MAX_ROW_WIDTH,
                    operator: "+",
                  })
                }
              >
                +
              </button>
            </div>
          </div>

          <div className={classNames(styles["field-container"])}>
            <label>Start Cell (Black Cell Index)</label>
            <div className="flex flex-row justify-center items-center gap-2">
              <input value={startCell} disabled={true} />
              <button
                className={classNames(styles["spinner-button"])}
                onClick={() =>
                  handleSpinnerClick({
                    value: startCell,
                    setValue: setStartCell,
                    minValue: MIN_START_CELL,
                    maxValue: MAX_START_CELL,
                    operator: "-",
                  })
                }
              >
                -
              </button>
              <button
                className={classNames(styles["spinner-button"])}
                onClick={() =>
                  handleSpinnerClick({
                    value: startCell,
                    setValue: setStartCell,
                    minValue: MIN_START_CELL,
                    maxValue: MAX_START_CELL,
                    operator: "+",
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Clear grid" : "Generate grid"}
        </button>
      </div>
    </>
  );
}
