import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 4000,
            quiz: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            marks: 3000,
            quiz: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            marks: 2000,
            quiz: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            marks: 2780,
            quiz: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            marks: 1890,
            quiz: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            marks: 2390,
            quiz: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            marks: 3490,
            quiz: 4300,
            amt: 2100
        }
    ];
    return (
        <div className='flex items-center justify-center my-12'>
            <LineChart height={400} width={600} data={data}>
                <Line type='monotone' dataKey='marks' stroke='green' ></Line>
                <Line type='monotone' dataKey='quiz' stroke='red' ></Line>
                <Line type='monotone' dataKey='amt' stroke='blue' ></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;