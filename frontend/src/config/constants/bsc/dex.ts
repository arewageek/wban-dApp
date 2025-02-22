import { DEXAggregator } from '@/models/dex/SwapQuote'

export default class DEX {
	getDexUrl() {
		return 'https://pancakeswap.finance'
	}
	getDexAggregator(): DEXAggregator {
		return '0x'
	}
	getDexAggregatorUri(): string {
		return 'https://bsc.api.0x.org/swap/v1/quote'
	}
	getDexAggregatorAllowanceTarget(): string {
		return '0xdef1c0ded9bec7f1a1670819833240f027b25eff'
	}
}
