import { UAuthMoralisConnector } from '@uauth/moralis'

// Instantiate your other connectors.
export const injected = {}

export const walletconnect = { provider: 'walletconnect' }

// This info comes from unstoppable dashboard
UAuthMoralisConnector.setUAuthOptions({
  clientID: '0ad2b4fa-bb81-44d4-a1b4-03e3f9a9623a',
  scope: 'openid email wallet',
  redirectUri: 'http://localhost:3000',
  // Scope must include openid and wallet
  // Injected and walletconnect connectors are required
  connectors: { injected, walletconnect },
})

export const uauth = { connector: UAuthMoralisConnector }

const connectors = {
  uauth,
}

export default connectors

// import { UAuthMoralisConnector } from '@uauth/moralis'

// // Instantiate your other connectors.
// export const injected = {}

// export const walletconnect = { provider: 'walletconnect' }

// UAuthMoralisConnector.setUAuthOptions({
//   clientID: '7f929f6c-5b4c-4fc6-a803-a56cc3de94da',
//   redirectUri: 'http://localhost:3000',
//   // fallbackIssuer: process.env.REACT_APP_FALLBACK_ISSUER!,
//   // Scope must include openid and wallet
//   scope: 'openid wallet',
//   // Injected and walletconnect connectors are required
//   connectors: { injected, walletconnect },
// })

// export const uauth = { connector: UAuthMoralisConnector }

// // add it
// const connectors = {
//   uauth,
// }

// export default connectors
