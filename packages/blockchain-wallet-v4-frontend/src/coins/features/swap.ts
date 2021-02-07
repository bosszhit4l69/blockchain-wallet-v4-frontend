import { CoinAccountSelectorType } from 'coins/types'
import { CoinType } from 'core/types'

// master list of coins supported by Swap
// the order of the determines the order in which coins are shown to the user
export const SUPPORTED_COINS: Array<CoinType>  = [
  'BTC',
  'ETH',
  'BCH',
  'XLM',
  'PAX',
  'USDT',
  'WDGLD',
  'ALGO'
]

// used in the coin/account selector in Swap
export const SWAP_ACCOUNTS_SELECTOR: CoinAccountSelectorType = {
  coins: SUPPORTED_COINS,
  custodialAccounts: true,
  nonCustodialAccounts: true
}