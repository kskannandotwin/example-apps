export interface Item {
    id: number;
  name: string;
  price: number;
  description: string;
};

export const items: Item[] = [
    {
        id: 1,
        name: 'Cheese',
        price: 3.99,
        description: 'Cheddar cheese'
    },
    {
        id: 2,
        name: 'Milk',
        price: 1.99,
        description: 'Cow milk'
    },
    {
        id: 3,
        name: 'Bread',
        price: 0.99,
        description: 'White bread'
    },
    {
        id: 4,
        name: 'Eggs',
        price: 0.99,
        description: 'White eggs'
    },
    {
        id: 5,
        name: 'Butter',
        price: 2.99,
        description: ''
    }    
];