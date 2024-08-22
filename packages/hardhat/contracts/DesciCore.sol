// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DesciCore is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    uint256 public constant MINT_PRICE = 10 * 10**18; // 10 DSCI tokens
    IERC20 public dsciToken;
    address public vendorContract;

    constructor(address _dsciToken, address _vendorContract) ERC721("DesciCoreLicense", "DSCIL") {
        tokenCounter = 0;
        dsciToken = IERC20(_dsciToken);
        vendorContract = _vendorContract;
    }

    function mintLicense(string memory projectName, string memory website, string memory documentHash) public {
        // Ensure the user has enough DSCI tokens to mint
        require(dsciToken.balanceOf(msg.sender) >= MINT_PRICE, "Insufficient DSCI tokens");

        // Check if the DesciCore contract is approved to spend DSCI tokens on behalf of the user
        uint256 allowance = dsciToken.allowance(msg.sender, address(this));
        require(allowance >= MINT_PRICE, "Approval required to spend DSCI tokens");

        // Transfer the DSCI tokens to the vendor contract
        dsciToken.transferFrom(msg.sender, vendorContract, MINT_PRICE);

        // Generate metadata URI (for simplicity, we're combining the details)
        string memory metadata = string(abi.encodePacked("Project: ", projectName, ", Website: ", website, ", Document Hash: ", documentHash));

        // Mint the NFT with the metadata
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, metadata);

        tokenCounter += 1;
    }
}
