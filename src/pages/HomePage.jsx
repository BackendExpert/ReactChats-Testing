import React from 'react'
import PieChart from '../components/Charts/PieChart'

const HomePage = () => {
    const chartData = {
        React: {value: 30, color: '#61DAFB'},
        Vite: {value: 50, color: '#646CFF'},
        Tailwindcss: {value: 20, color: '#38BDF8'},
    };
  return (
    <div>
        <PieChart data={chartData} />
    </div>
  )
}

export default HomePage