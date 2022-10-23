// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract Problem5 {

    constructor() {
    }

    struct returnObject {
        address TokenAddr;
        uint256 amount;
    }

    function getBalances(address add, address[] memory tokens) public view returns (returnObject[] memory) {
        returnObject[] memory ans;
        for (uint i; i < tokens.length; i++) {
            ans[i] = returnObject(tokens[i], IERC20(tokens[i]).balanceOf(add));
        }
        return ans;
    }

}

//issue with deploying it to local network. the contract can get compiled successfully and the artifacts are written to build/contracts
//but somehow truffle migrate does not deploy the contracts to the local network. have tried with multiple test networks to no avail
//also tried copying the code from online tutorials and migrating it but no luck so far.

