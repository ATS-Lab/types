declare type Candlestick = LastPriceCandlestick | IndexPriceCandlestick | MarkPriceCandlestick;

declare type LastPriceCandlestick = {
    openTime: number;
    openPrice: number;
    high: number;
    low: number;
    closePrice: number;
    volume: number;
    closeTime: number;
    quoteAssetVolume: number;
    numberOfTrades: number;
    takerBuyBaseAssetVolume: number;
    takerBuyQuoteAssetVolume: number;
};

declare type IndexPriceCandlestick = {
    openTime: number;
    openPrice: number;
    high: number;
    low: number;
    closePrice: number;
    closeTime: number;
    numberOfBasicData: number;
};

declare type MarkPriceCandlestick = {
    openTime: number;
    openPrice: number;
    high: number;
    low: number;
    closePrice: number;
    closeTime: number;
    numberOfBasicData: number;
};