// SPDX-License-Identifier: MIT

pragma solidity >=0.8.26;

import "hardhat/console.sol";

error GreeterError();

contract Greeter {
    string private _greeting;

    constructor(string memory greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        _greeting = greeting;
    }

    function getGreeting() public view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string memory greeting) public {
        console.log("Changing greeting from '%s' to '%s'", _greeting, greeting);
        _greeting = greeting;
    }

    function throwError() external pure {
        revert GreeterError();
    }
}
