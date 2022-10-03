import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Premium Feature',
                'Exclusive Feature',
                'Gold Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Premium Feature',
                'Exclusive Feature',
                'Gold Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Premium Feature',
                'Exclusive Feature',
                'Gold Feature'
            ]
        },
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 text-white mt-6 p-12'>Best Deal Of Your Town</h1>
            <div className='grid sm:grid-cols-2 gap-5 md:grid-cols-3 gap-4 mt-8'>
                {
                    pricingOptions.map(option =>
                        <PriceOption
                            key={option.id}
                            option={option}
                        ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing; 