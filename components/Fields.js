const MAX_RULE_VALUE = 256;
const MAX_ROW_WIDTH = 100;

export default function Fields({
  rule,
  setRule,
  cellCount,
  setCellCount,
  isActive,
  setIsActive,
}) {
  function handleFieldChange({ event, setValue, maxValue }) {
    setValue((currentValue) => {
      if (event?.target?.validity?.valid) {
        if (event?.target?.value > maxValue) return maxValue - 1;
        return event?.target?.value;
      } else return currentValue;
    });
  }

  return (
    <>
      <div>
        <label>Rule: </label>
        <input
          type="text"
          pattern="[0-9]*"
          value={rule}
          onChange={(event) =>
            handleFieldChange({
              event: event,
              setValue: setRule,
              maxValue: MAX_RULE_VALUE,
            })
          }
        />
        <label>Size: </label>
        <input
          type="text"
          pattern="[0-9]*"
          value={cellCount}
          onChange={(event) =>
            handleFieldChange({
              event: event,
              setValue: setCellCount,
              maxValue: MAX_ROW_WIDTH,
            })
          }
        />

        <button
          // className={`border-2 border-black rounded-md ${
          //   isActive ? "bg-green-400" : "bg-red-500"
          // }`}
          onClick={() => setIsActive(!isActive)}
        >
          Generate Table
        </button>
      </div>
    </>
  );
}
