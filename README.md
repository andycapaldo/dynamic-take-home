# Dynamic SDK + React Vite.js Demo

A React demo that shows how the Dynamic SDK enables sign in, embedded wallets, gasless transactions, NFT minting, simple money sends, and MFA.

> Inspired by Dynamic’s [official examples.](https://github.com/dynamic-labs/examples)

## Live Demo
View a live demo of this app here: [Live Demo](https://dynamic-take-home-ashy.vercel.app/)

## ✅ What this demo covers

- **Embedded TSS-MPC wallets:** Base Sepolia and Solana devnet, right at sign-in

- **Gasless transactions** using a ZeroDev paymaster

- **NFT mint** on Base Sepolia with a 2-click flow

- **“Send money”** that is clear and simple

- **Multi-chain** awareness and switching

## ▶️ What you can do in this demo

1. Mint NFTs using Dynamic’s embedded wallet
  
    - Mint page calls a simple ERC-721 contract on Base Sepolia
  
    - User confirms, transaction submits, explorer link appears

2. Offer services on as many chains as Dynamic supports

    - App is wired for EVM and SVM networks
  
    - Chains page explains how to enable more networks through the Dynamic dashboard without code changes

3. Account abstraction and gas fees

    - Gas is sponsored through a ZeroDev paymaster
  
    - Users pay $0 in gas when signing EVM transactions in this app

4. User security and additional security

    - Security page explains TSS-MPC and TEEs in plain language
  
    - Users can add passkeys or TOTP in the Dynamic widget
  
    - Optional step-up MFA for sensitive actions like mint or send

5. Make it really clear how to send money

    - Send page offers a faucet for test USDC
  
    - Instructions tell the user to open the Dynamic widget and press Send
  
    - Example test addresses provided to make it turnkey

## ⚙️ Environment Variables
### `.env`)

```env
VITE_DYNAMIC_ENVIRONMENT_ID=
VITE_ZERODEV_PROJECT_ID=
```
> You can find your environment ID in the Dynamic dashboard on the top navbar

## Prerequisites

- Node 18 or higher

- A Dynamic environment with Base Sepolia and Solana devnet enabled

- A ZeroDev project with a gas policy on Base Sepolia and balance funded

- An ERC-721 contract deployed to Base Sepolia for the demo mint

- Optional: a second test wallet address to receive USDC

## Quick Start

1. Clone and install dependencies:

```bash
npm install
```

2. Set up your environment variables (see `.env.example`)

3. Configure Dynamic

   - Enable Base Sepolia and Solana devnet
 
   - Turn on Sponsored Gas and select your ZeroDev project and policy

3. Run the development server:

```bash
npm run dev
```

## :paperclip: Notes
- ZeroDev Account Abstraction must be configured in the Dynamic Dashboard, using ERC-4337 (legacy mode)
- EOA (externally-owned accounts) are disabled, as the app is meant to just showcase embedded wallets
- Require / force MFA is turned off, as the app demonstrates how a user can easily set it up themselves
- Smart contracts for the NFT and fUSDC mints were deployed via Remix IDE

## :books: Reference Docs
- [Dynamic Docs](https://docs.dynamic.xyz)
- [ZeroDev Paymaster (for gas sponsorship)](https://docs.zerodev.app/sdk/core-api/sponsor-gas)
- [Wagmi Docs](https://wagmi.sh/react/getting-started)
- [Remix Docs](https://remix-ide.readthedocs.io/en/latest/)
