// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {
    uint public x;

    function changex(uint _x) external {
        x = _x;
    }
}
