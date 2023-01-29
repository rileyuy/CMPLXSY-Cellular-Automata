import { useState } from "react";
import Head from "next/head";

import PageHeader from "@/components/PageHeader";
import Fields from "@/components/Fields";
import Grid from "@/components/Grid";

export default function Home() {
  const [rule, setRule] = useState(10);
  const [cellCount, setCellCount] = useState(10);
  const [isActive, setIsActive] = useState(false);

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
        <Fields
          rule={rule}
          setRule={setRule}
          cellCount={cellCount}
          setCellCount={setCellCount}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <Grid cellCount={cellCount} rule={rule} isActive={isActive} />
      </main>
    </>
  );
}
