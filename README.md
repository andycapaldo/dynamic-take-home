# Dynamic Demo – Gasless Mint and Send with Embedded Wallets

A React demo that shows how the Dynamic SDK enables sign in, embedded wallets, gasless transactions, NFT minting, simple money sends, and MFA. Built for a take-home assessment.

## What this demo covers

- **Sign in creates two embedded wallets: Base Sepolia and Solana devnet

- **Gasless transactions using a ZeroDev paymaster

- **NFT mint on Base Sepolia with a 2-click flow

- **“Send money” that is clear and simple

- **Multi-chain awareness and switching

- **Security page that explains TSS-MPC and shows MFA setup

## Customer issues and how this demo addresses them

1. Mint NFTs using Dynamic’s embedded wallet

 - Mint page calls a simple ERC-721 on Base Sepolia

 - User confirms, transaction submits, explorer link appears

2. Offer service on as many chains as Dynamic supports

 - App is wired for EVM and Solana today

 - Chains page explains how to enable more networks through the Dynamic dashboard without code changes

3. Explain account abstraction and gas fees

 - Gas is sponsored through a ZeroDev paymaster

 - Copy on Home and Send pages explains that users do not need gas and why

4. User security and additional security

- Security page explains TSS-MPC and TEEs in plain language

- Users can add passkeys or TOTP in the Dynamic widget

- Optional step-up MFA for sensitive actions like mint or send

5. Make it really clear how to send money

 - Send page offers a faucet for test USDC

 - Instructions tell the user to open the Dynamic widget and press Send

 - Example test addresses provided to make it turnkey

## Architecture

- Dynamic React SDK for auth, embedded wallets, and widget

- ZeroDev paymaster for sponsored gas on EVM

- ERC-721 public mint on Base Sepolia for the demo collection

- Fake USDC ERC-720 on Base Sepolia for the send flow

## Prerequisites

- Node 18 or higher

- A Dynamic environment with Base Sepolia and Solana devnet enabled

- A ZeroDev project with a gas policy on Base Sepolia and balance funded

- An ERC-721 contract deployed to Base Sepolia for the demo mint

Optional: a second test wallet address to receive USDC

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

## How to use the demo

1. Sign in

- Two embedded wallets are created automatically

- Home shows email, active wallet address, enabled chains, and MFA status

2. Mint an NFT

- Go to Mint

- Click Mint

- Confirm in the widget and view the Block explorer link

3. Send money

- Go to Send

- Click “Get 100 fUSDC” to fund with test tokens

- Open the Dynamic widget and press Send

- Choose fUSDC, paste an example address, send

- Gas is sponsored, user pays 0$ in fees

4. Switch chains

- Go to Chains

- Use the widget or buttons to switch between Base Sepolia and Solana devnet

- The UI updates to reflect the active chain

5. Add security

- Go to Security

- Read the TSS-MPC summary

- Add a passkey or set up TOTP in the widget

- Optional: force MFA in onboarding or for sensitive actions via Dynamic Dashboard > Security settings

