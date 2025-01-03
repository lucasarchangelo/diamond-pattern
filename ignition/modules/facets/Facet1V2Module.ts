import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Facet1V2Module = buildModule("Facet1V2Module", (m) => {

  //Config facet
  const facet1V2 = m.contract("Facet1V2");

  return { facet1V2 };
});

export default Facet1V2Module;
