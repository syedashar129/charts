//import "./styles.css";
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        time: '21:34:03.600573',
        voltage: 1682}
    ,
    {
        time : '21:34:03.600573',
        voltage : 1699
    },
    {time: '21:34:03.600573', voltage: 1697},
    {time: '21:34:03.601570', voltage: 1689},
    {time: '21:34:03.601570', voltage: 1679},
    {time: '21:34:03.601570', voltage: 1660},
    {time: '21:34:03.601570', voltage: 1695},
    {time: '21:34:03.601570', voltage: 1683},
    {time: '21:34:03.601570', voltage: 1679},
    {time: '21:34:03.601570', voltage: 1690},
    {time: '21:34:03.601570', voltage: 1679},
    {time: '21:34:03.602568', voltage: 1681}
];

export default function App() {

    return (
        <LineChart
            width={700}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis
                dataKey="voltage"
                domain={[1600, 1800]}
            />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="voltage"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            {/*<Line type="monotone" dataKey="time" stroke="#82ca9d" />*/}
        </LineChart>

    );
}
