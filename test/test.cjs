(async () => {
  const Parser = await import("../src/index.js");

  const tree = Parser.parse("const test='marcus'; let demo=10;");
  console.log(tree);
})();