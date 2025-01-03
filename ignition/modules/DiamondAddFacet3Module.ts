
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { toFunctionSelector, zeroAddress } from "viem";

import DiamondModule from "./DiamondModule";
import Facet3Module from "./facets/Facet3Module";

const FacetCutAction = {
    Add: 0,
    Replace: 1,
    Remove: 2,
};

const DiamondAddFacet3Module = buildModule("DiamondAddFacet3Module", (m) => {
    // get facets
    const { facet3 } = m.useModule(Facet3Module);

    // get diamond cut interface using diamond address
    const { diamond } = m.useModule(DiamondModule);
    const proxyDiamond = m.contractAt("DiamondCutFacet", diamond);

    // Include method selectors for each facet
    const facet3Selectors = [
        toFunctionSelector("function setFacet3(uint256 _position, string memory _name)"),
        toFunctionSelector("function getFacet3(uint256 _position)"),
    ];

    // create an array of facet cut actions
    const facetCutActions = [{
        facetAddress: facet3,
        action: FacetCutAction.Add,
        functionSelectors: facet3Selectors,
    }];

    // call diamond cut method on diamond contract as proxy
    m.call(proxyDiamond, "diamondCut", [facetCutActions, zeroAddress, "0x"]);
    const proxyFacet3 = m.contractAt("Facet3", diamond, { id: "Facet3Proxy"});

    return { proxyFacet3 };
});

export default DiamondAddFacet3Module;
