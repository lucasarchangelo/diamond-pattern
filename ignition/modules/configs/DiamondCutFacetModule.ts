
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DiamondCutFacetModule = buildModule("DiamondCutFacetModule", (m) => {
  const diamondCut = m.contract("DiamondCutFacet");

  return { diamondCut };
});

export default DiamondCutFacetModule;
