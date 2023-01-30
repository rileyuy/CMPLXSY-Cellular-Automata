This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About 1D Elementary Cellular Automata

It is a one-dimensional cellular automaton where the state of each of the cells in a grid are denoted by one of two states 0 and 1 which is denoted by a not-shaded and shaded tile respectively, where in each tile is determined by a set of rules. These rules are made by cell and its two neighbors, and these three cells would define the state of the cell on the next generation (the next row). The rules, grid size and the starting position of the shaded cell at the first row is defined by the user and will affect how the cellular automata is generated with the given parameters. 

## To run the application

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Input the rule number, grid size and the starting index of the black cell then press *Generate Table* to see the generated cellular automata.
