import Parser from "./frontend/parser.ts";
import { evaluate } from "./runtime/interpriter.ts";

repl();

function repl() {
  const parser = new Parser();
  console.log("\nRepl v0.1");
  // Continue Repl Until User Stops Or Types `exit`
  while (true) {
    const input = prompt("SashaLang 0.1> ");
    // Check for no user input or exit keyword.
    if (!input || input.includes("exit")) {
      Deno.exit(1);
    }

    // Produce AST From sourc-code
    const program = parser.produceAST(input);
    console.log(program);
  }
}
