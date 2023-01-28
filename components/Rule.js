import classNames from "classnames";

import styles from "../styles/Rules.module.css";

export default function Rule({ header }) {
  return (
    <>
      <div className="bg-white w-44 h-36 flex flex-wrap flex-col justify-center items-center overflow-hidden rounded-lg drop-shadow-xl">
        <div className={classNames(styles["top-tile-container"])}>
          {header.map((tile, key) => {
            let color = "bg-transparent";
            if (tile) color = "bg-[#2a1f2d]";
            return (
              <div
                key={key}
                className={classNames(styles["top-tile"], `${color}`)}
              />
            );
          })}
        </div>
        <div className={classNames(styles["bottom-tile-container"])}>
          <div className={classNames(styles["bottom-tile"])} />
        </div>
      </div>
    </>
  );
}
