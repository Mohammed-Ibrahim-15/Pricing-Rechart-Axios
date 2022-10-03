import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneLoader = data.data.data
                const phoneData = phoneLoader.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone
                })
                console.log(phoneData)
                setPhones(phoneData)
            })
    }, {})
    return (
        <div className='flex items-center justify-center my-12'>
            <BarChart width={600} height={200} data={phones}>
                <Bar dataKey='price' fill='red'></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default PhoneBar;