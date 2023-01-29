import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import CellGrid from "@/components/CellGrid";
import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import PageHeader from "@/components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cellCount, setCellCount] = useState(10);
  const [rule, setRule] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive(!isActive);
  }

  function handleRuleChange(event) {
    setRule(event?.target?.value);
  }

  function handleCellCountChange(event) {
    setCellCount(event?.target?.value);
  }

  return (
    <>
      <Head>
        <title>Elementary Cellular Automata Simulator</title>
        <meta
          name="description"
          content="Elementary Cellular Automata Simulator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-full">
        <PageHeader rule={rule} />
        <div>
          <label>Rule: </label>
          <input
            type="number"
            min="0"
            max="255"
            step="1"
            className="border-2 border-black rounded-md"
            onInput={console.log(this)}
            onChange={handleRuleChange}
          ></input>
          <label>Size: </label>

          <input
            type="number"
            min="1"
            max="100"
            step="1"
            className="border-2 border-black rounded-md"
            onChange={handleCellCountChange}
          ></input>

          <button
            className={`border-2 border-black rounded-md ${
              isActive ? "bg-green-400" : "bg-red-500"
            }`}
            onClick={() => toggleActive()}
          >
            Generate Table
          </button>
        </div>
        <div className="w-full h-full pl-12 pt-12">
          <CellGrid cellCount={cellCount} rule={rule} isActive={isActive} />
        </div>
      </main>
    </>
  );
}
