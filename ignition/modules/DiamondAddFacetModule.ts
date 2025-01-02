
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { toFunctionSelector, zeroAddress } from "viem";

import DiamondModule from "./DiamondModule";
import Facet1Module from "./facets/Facet1Module";
import Facet2Module from "./facets/Facet2Module";

const FacetCutAction = {
    Add: 0,
    Replace: 1,
    Remove: 2,
};

const DiamondAddFacetModule = buildModule("DiamondAddFacetModule", (m) => {
    // get facets
    const { facet1 } = m.useModule(Facet1Module);
    const { facet2 } = m.useModule(Facet2Module);

    // get diamond cut interface using diamond address
    const { diamond } = m.useModule(DiamondModule);
    const proxyDiamond = m.contractAt("DiamondCutFacet", diamond);

    // Include method selectors for each facet
    const facet1Selectors = [
        toFunctionSelector("function setFacet1(uint256 _position, string memory _value)"),
        toFunctionSelector("function getFacet1(uint256 _position)"),
    ];

    const facet2Selectors = [
        toFunctionSelector("function setFacet2(uint256 _position, string memory _value)"),
        toFunctionSelector("function getFacet2(uint256 _position)"),
    ];

    // create an array of facet cut actions
    const facetCutActions = [{
        facetAddress: facet1,
        action: FacetCutAction.Add,
        functionSelectors: facet1Selectors,
    },
    {
        facetAddress: facet2,
        action: FacetCutAction.Add,
        functionSelectors: facet2Selectors,
    }];

    // call diamond cut method on diamond contract as proxy
    m.call(proxyDiamond, "diamondCut", [facetCutActions, zeroAddress, "0x"]);
    const proxyFacet1 = m.contractAt("Facet1", diamond, { id: "Facet1Proxy"});
    const proxyFacet2 = m.contractAt("Facet2", diamond, { id: "Facet2Proxy"});

    return { proxyFacet1, proxyFacet2, diamond };
});

export default DiamondAddFacetModule;
