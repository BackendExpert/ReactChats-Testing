import React from 'react'
import PieChart from 'react-vite-charts';

const HomePage = () => {
    const chartData = {
        React: {value: 20, color: '#61DAFB'},
        Vite: {value: 60, color: '#646CFF'},
        Tailwindcss: {value: 20, color: '#38BDF8'},
    };
  return (
    <div>
        <div className="md:grid grid-cols-3" >
            <div className="">
                <PieChart data={chartData} />
            </div>
            <div className="">
                <PieChart data={chartData} />
            </div>
            <div className="">
                <PieChart data={chartData} />
            </div>
        </div>
    </div>
  )
}

export default HomePage