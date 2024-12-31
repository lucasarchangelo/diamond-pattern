import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Facet2Module = buildModule("Facet2Module", (m) => {

  //Config facet
  const facet2 = m.contract("Facet2");

  return { facet2 };
});

export default Facet2Module;
