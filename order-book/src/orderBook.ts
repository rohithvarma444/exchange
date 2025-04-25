interface Order{
    orderId: string,
    quantity: number,
    price: number
}

interface Bids extends Order{
    side: 'bid';
}

interface Asks extends Order{
    side: 'ask'
}

interface OrderBook{
    bids: Bids[]
    asks: Asks[]
}

export const orderbook : OrderBook = {
    bids: [],
    asks: [],
} 

export const orderQuantity: {bids:{[price: number]: number}; asks: {[price: number]: number}} = {
    bids: {},
    asks: {}
}
