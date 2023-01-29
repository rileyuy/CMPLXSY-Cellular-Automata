import classNames from "classnames";

import styles from "../styles/Rules.module.css";

export default function Rule({ header, ruleBit }) {
  let bottomTileColor = "bg-transparent";

  if (ruleBit) bottomTileColor = "bg-[#2a1f2d]";

  return (
    <>
      <div className="bg-white w-44 h-36 flex flex-wrap flex-col justify-center items-center overflow-hidden rounded-lg drop-shadow-xl">
        <div className={classNames(styles["top-tile-container"])}>
          {header.map((tile, key) => {
            let topTileColor = "bg-transparent";
            if (tile) topTileColor = "bg-[#2a1f2d]";
            return (
              <div
                key={key}
                className={classNames(styles["top-tile"], `${topTileColor}`)}
              />
            );
          })}
        </div>
        <div className={classNames(styles["bottom-tile-container"])}>
          <div
            className={classNames(styles["bottom-tile"], `${bottomTileColor}`)}
          />
        </div>
      </div>
    </>
  );
}
