// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AppStorage} from "../storage/AppStorage.sol";

contract Facet2 {
    
    AppStorage internal s;

    function setFacet2(string memory _value) external {
        s.facet2[0] = _value;
    }

    function getFacet2() external view returns (string memory) {
        return s.facet2[0];
    }
}