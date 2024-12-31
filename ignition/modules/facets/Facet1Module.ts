import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Facet1Module = buildModule("Facet1Module", (m) => {

  //Config facet
  const facet1 = m.contract("Facet1");

  return { facet1 };
});

export default Facet1Module;
