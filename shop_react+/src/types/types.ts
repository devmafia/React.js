export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
}

export interface CartState {
    items: Product[];
    totalPrice: number;
    currency: string;
    convertedTotal: number;
}

export type Currency = "USD" | "UAH" | "GBP" | "JPY"