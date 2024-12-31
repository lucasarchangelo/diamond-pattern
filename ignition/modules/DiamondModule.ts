import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import DiamondCutFacetModule from "./configs/DiamondCutFacetModule";
import DiamondLoupeFacetModule from "./configs/DiamondLoupeFacetModule";

const DiamondModule = buildModule("DiamondModule", (m) => {
  const account = m.getAccount(0);

  // Diamond Cut and Loupe
  const { diamondCut } = m.useModule(DiamondCutFacetModule);
  const { diamondLoupe } = m.useModule(DiamondLoupeFacetModule);

  // Diamond
  const diamond = m.contract("Diamond", [account, diamondCut, diamondLoupe]);

  return { diamond };
});

export default DiamondModule;
