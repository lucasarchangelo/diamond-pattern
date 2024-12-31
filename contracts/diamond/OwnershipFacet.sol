// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {LibDiamond} from "../libraries/LibDiamond.sol";
import {AppStorage} from "../storage/AppStorage.sol";

contract OwnershipFacet {
    AppStorage internal s;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    function transferOwnership(address _newOwner) external {
        LibDiamond.enforceIsContractOwner();
        s.owner = _newOwner;
    }

    function claimOwnership() external {
        require(s.owner == msg.sender, "Ownership: Not candidate");
        LibDiamond.setContractOwner(msg.sender);
        delete s.owner;
    }

    function owner() external view returns (address owner_) {
        owner_ = LibDiamond.contractOwner();
    }

    function ownerCandidate() external view returns (address ownerCandidate_) {
        ownerCandidate_ = s.owner;
    }
}