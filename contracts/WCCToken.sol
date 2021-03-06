// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract WCCToken is ERC20 {
    constructor(uint256 _supply) ERC20('WayneChangCoin', 'WCC') {
        _mint(msg.sender, _supply * (10**decimals()));
    }
}
