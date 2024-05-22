export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface Mobile {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
    },
    {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    },
    {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: ''
    }
];

export const mobiles: Mobile[] = [
    {
        id: 1,
        name: 'Redmi 10',
        price: 10799,
        description: 'A large phone with one of the best screens'
    },
    {
        id: 2,
        name: 'Redmi 7A',
        price: 6699,
        description: ''
    },
    {
        id: 3,
        name: 'Redmi Sport',
        price: 12299,
        description: 'A great phone with one of the best cameras'
    }
];