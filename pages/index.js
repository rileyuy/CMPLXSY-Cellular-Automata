import { useState } from "react";
import Head from "next/head";

import PageHeader from "@/components/PageHeader";
import Fields from "@/components/Fields";
import Grid from "@/components/Grid";

export default function Home() {
  const [rule, setRule] = useState(10);
  const [cellCount, setCellCount] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [startCell, setStartCell] = useState(Math.ceil(cellCount / 2));

  return (
    <>
      <Head>
        <title>1D Elementary Cellular Automata Simulator</title>
        <meta
          name="description"
          content="1D Elementary Cellular Automata Simulator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-full">
        <PageHeader rule={rule} />
        <Fields
          rule={rule}
          setRule={setRule}
          cellCount={cellCount}
          setCellCount={setCellCount}
          isActive={isActive}
          setIsActive={setIsActive}
          startCell={startCell}
          setStartCell={setStartCell}
        />
        <Grid
          cellCount={cellCount}
          rule={rule}
          startCell={startCell}
          isActive={isActive}
        />
      </main>
    </>
  );
}
