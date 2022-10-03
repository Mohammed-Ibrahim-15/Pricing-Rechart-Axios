import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => console.log(data))
    }, {})
    return (
        <div>

        </div>
    );
};

export default PhoneBar;