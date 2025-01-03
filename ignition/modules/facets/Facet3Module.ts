import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Facet3Module = buildModule("Facet3Module", (m) => {

  //Config facet
  const facet3 = m.contract("Facet3");

  return { facet3 };
});

export default Facet3Module;
