
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DiamondLoupeFacetModule = buildModule("DiamondLoupeFacetModule", (m) => {
  const diamondLoupe = m.contract("DiamondLoupeFacet");

  return { diamondLoupe };
});

export default DiamondLoupeFacetModule;
