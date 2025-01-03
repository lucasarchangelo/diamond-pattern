
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { toFunctionSelector, zeroAddress } from "viem";

import DiamondModule from "./DiamondModule";
import Facet1Module from "./facets/Facet1Module";
import Facet1V2Module from "./facets/Facet1V2Module";

const FacetCutAction = {
    Add: 0,
    Replace: 1,
    Remove: 2,
};

const DiamondAddFacetModule = buildModule("DiamondAddFacetModule", (m) => {
    // get facets
    const { facet1 } = m.useModule(Facet1Module);
    const { facet1V2 } = m.useModule(Facet1V2Module);

    // get diamond cut interface using diamond address
    const { diamond } = m.useModule(DiamondModule);
    const proxyDiamond = m.contractAt("DiamondCutFacet", diamond);

    // Remove method selectors for each old facet
    const facet1SelectorsRemove = [
        toFunctionSelector("function setFacet1(uint256 _position, string memory _name)"),
        toFunctionSelector("function getFacet1(uint256 _position)"),
    ];

    // Include method selectors for each facet
    const facet1Selectors = [
        toFunctionSelector("function setFacet1(uint256 _position, string memory _name, uint8 _age)"),
        toFunctionSelector("function getFacet1(uint256 _position)"),
    ];

    // create an array of facet cut actions
    const facetCutActions = [{
        facetAddress: facet1,
        action: FacetCutAction.Remove,
        functionSelectors: facet1SelectorsRemove,
    },
    {
        facetAddress: facet1V2,
        action: FacetCutAction.Add,
        functionSelectors: facet1Selectors,
    }];

    // call diamond cut method on diamond contract as proxy
    m.call(proxyDiamond, "diamondCut", [facetCutActions, zeroAddress, "0x"]);
    const proxyFacet1V2 = m.contractAt("Facet1V2", diamond, { id: "Facet1V2Proxy"});

    return { proxyFacet1V2, diamond };
});

export default DiamondAddFacetModule;
