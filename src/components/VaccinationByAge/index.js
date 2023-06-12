// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="bg-container">
      <h1 className="stat-head">Vaccination by age</h1>
      <PieChart height={300} width={1000}>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationByAge}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="44-60" fill="#64c2a6" />
          <Cell name="Above 60" fill="#a3df9f" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto', marginBottom: 30}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
