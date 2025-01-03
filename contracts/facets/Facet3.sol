// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AppStorage, Person} from "../storage/AppStorageV2.sol";

contract Facet3 {
    AppStorage internal s;

    function setFacet3(uint256 _position, string memory _name) external {
        s.facet3[_position].name = _name;
    }

    function getFacet3(uint256 _position) external view returns (Person memory) {
        return s.facet3[_position];
    }
}
