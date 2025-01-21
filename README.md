# 🚩 DSCI Rewards Vendor for DeSci Companies using CureLedger Compliance Infrastructure 🤖

![readme-2](https://github.com/scaffold-eth/se-2-challenges/assets/55535804/b427171f-3f20-41a5-b76f-05d67e2b9959)

This dApp is designed to help DeSci companies easily and provably comply with global health regulations by delivering DSCI tokens to DeSci companies who need the CureLedger product. It extends the concepts of the Scaffold-ETH 2 `Token Vendor` challenge to provide real-world applications for decentralized science.

🏵 Users can deploy smart contracts to create and distribute ERC20 tokens as rewards. The vendor contracts must be manually funded using the `/inspect-contracts` panel to facilitate token distribution.

🎉 This project credits **Scaffold-ETH 2** and **SpeedRun Ethereum** for its foundational content and inspiration.

---

## Features

- Deploy ERC20 tokens for incentivizing data contributions and rewarding compliance.
- Use a `Vendor` contract as a decentralized vending machine for buying and selling tokens.
- Fully integrated with CureLedger's compliance infrastructure for decentralized science.
- Manual funding of the `Vendor` contract via the `/inspect-contracts` panel.

---

## 🚀 Getting Started

Follow these steps to set up and deploy the project:

### 1. 📦 Environment Setup

Before you begin, ensure the following tools are installed:

- [Node.js (>= v18.17)](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/dsci-rewards-vendor.git
cd dsci-rewards-vendor
yarn install

## 2. 🌐 Start the Local Environment

Start a local blockchain and deploy your contracts:

In the first terminal:

```sh
yarn chain

In the second terminal:

yarn deploy

In the third terminal:

yarn start
```

📱 Open http://localhost:3000 to view the app.

💻 Key Components

🛠 Vendor Contract
The Vendor contract acts as a decentralized vending machine for your ERC20 tokens. After deploying the contracts, manually fund the Vendor contract using the /inspect-contracts panel to enable token distribution.

🔍 Manual Funding
To ensure proper functionality, fund the Vendor contract manually from the /debug page


Navigate to the /debug panel in the frontend.

Send tokens to the Vendor contract address to fund its inventory.

Users can then buy tokens directly from the Vendor.


🧪 Testing Your Setup


Use the Debug Contracts tab to verify the functionality:

Check your token balances using balanceOf.

Transfer tokens between accounts and confirm their balances.

Test the buy and sell functionality of the Vendor contract.

📝 Goals

 Verify the Vendor address has a sufficient token balance (balanceOf).
 
 Buy tokens by sending ETH to the Vendor contract.
 
 Sell tokens back to the Vendor contract.

🌐Deploying to a Public Network
To deploy on a public EVM-compatible network, follow these steps:

Edit the defaultNetwork in hardhat.config.ts to your desired network.

Fund your deployer address with ETH using a wallet or public faucet.

Deploy the contracts:

sh
Copy
Edit
yarn deploy --network <your-network>
🔗 Verifying Contracts
Run the following command to verify your contracts on Etherscan:

sh
Copy
Edit
yarn verify --network <your-network>
Provide the verified contract addresses to your users to ensure transparency.

🚢 Deploying the Frontend
Once the contracts are deployed, deploy the frontend app:

Edit scaffold.config.ts to target the public network:

javascript
Copy
Edit
targetNetwork: chains.<your-network>;
Run the Vercel deployment:

sh
Copy
Edit
yarn vercel
Share the generated public URL with your users.

🏗 Credits
This project is built on Scaffold-ETH 2 and the SpeedRun Ethereum framework.

Scaffold-ETH 2: https://github.com/scaffold-eth/scaffold-eth-2
SpeedRun Ethereum: https://speedrunethereum.com
🔧 Configuration Tips
For production-grade deployments:

Obtain your own API keys for services like Alchemy and Etherscan.
Store environment variables securely (e.g., .env.local or Vercel/system environment config).
🎯 Checklist
 Contracts deployed and verified on a public network.
 Vendor contract funded with tokens.
 Frontend deployed and connected to the network.
 Users can buy and sell tokens seamlessly.
🌟 Next Steps
Expand functionality for additional DeSci use cases.
Share the app with CureLedger customers to enhance adoption.
Continue iterating on compliance-focused decentralized solutions.
Happy building! 🚀



