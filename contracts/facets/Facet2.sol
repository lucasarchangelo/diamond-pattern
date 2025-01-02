// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AppStorage, Person} from "../storage/AppStorage.sol";

contract Facet2 {
    AppStorage internal s;

    function setFacet2(uint256 position, string memory _name) external {
        s.facet2[position].name = _name;
    }

    function getFacet2(uint256 position) external view returns (Person memory) {
        return s.facet2[position];
    }
}
