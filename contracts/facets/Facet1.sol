// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AppStorage} from "../storage/AppStorage.sol";

contract Facet1 {
    
    AppStorage internal s;

    function setFacet1(string memory _value) external {
        s.facet1[0] = _value;
    }

    function getFacet1() external view returns (string memory) {
        return s.facet1[0];
    }
}