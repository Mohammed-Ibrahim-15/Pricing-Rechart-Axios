import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option
    return (
        <div className='bg-indigo-300 m-4 p-4 rounded-md'>
            <div>
                <p>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-xl text-gray-200'>/month</span>
                </p>
                <h1 className='text-3xl my-5'>{option.name}</h1>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full mt-4 py-3 rounded-xl text-white font-semibold hover:bg-yellow-500'>Purchase Now</button>
        </div>
    );
};

export default PriceOption;