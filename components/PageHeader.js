import Rule from "./Rule";

import ruleHeaders from "../utils/ruleHeaders";

export default function PageHeader() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-5/6 py-12 flex flex-col justify-center items-center">
          <h1 className="text-center flex justify-center items-center">
            Elementary Cellular Automata Simulator
          </h1>
          <p className="text-center flex justify-center items-center mt-4">
            By 🧌 Riley Uy and 🦧 Vince Esquivel
          </p>
        </div>
        <div className="w-full py-12 flex flex-col justify-center items-center">
          <h2 className="mb-8">Here are the rules</h2>
          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xxxl:grid-cols-8">
            {ruleHeaders.map((header, key) => {
              return <Rule key={key} header={header} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
