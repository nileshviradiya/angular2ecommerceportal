
export interface IBrand {
    name: string,
    selected: boolean
}
export interface AggregateRating {
    ratingValue: number;
    reviewCount: number;
}

export interface Offer {
    id: number;
    discount: number;
    price: number;
    priceCurrency: string;
    priceValidUntil: string;
    itemCondition: string;
    seller: string[];
    availability: number;
}

export class IProduct {
    _id: string;
    index: number;
    guid: string;
    isActive: boolean;
    balance: string;
    picture: string;
    age: number;
    category: string;
    name: string;
    brand: string;
    price: number;
    description: string;
    CreatedDate: string;
    latitude: number;
    longitude: number;
    size: string[];
    Tags: string[];
    aggregateRating: AggregateRating[];
    offers: Offer[];
    greeting: string;
    favoriteFruit: string;
}

