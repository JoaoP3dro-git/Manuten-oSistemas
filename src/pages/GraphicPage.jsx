import style from '../App.module.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar } from 'recharts';
import data from '../constants/graphics.json'

export function GraphicPage() {
    return(
        <>
            <h2>Gráficos</h2>
            <div>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="x" />
                <YAxis />
            </LineChart>
            <BarChart width={600} height={300} data={data}>
                <Bar dataKey="y" fill="#8884d8" />
            </BarChart>
            </div>
        </>
    )
}