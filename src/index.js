import antlr4 from "antlr4";
import JavaScriptLexer from "../antlr4/JavaScriptLexer.js";
import JavaScriptParser from "../antlr4/JavaScriptParser.js";

export function parse(code) {
  code = code.toUpperCase();

  const chars = new antlr4.InputStream(code);
  const lexer = new JavaScriptLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JavaScriptParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.program();

  return tree;
}
