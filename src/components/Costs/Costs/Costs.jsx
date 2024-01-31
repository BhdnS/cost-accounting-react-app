import { useState } from 'react'
import Card from '../../UI/Card/Card'
import CostFilter from '../CostFilter/CostFilter'
import CostList from '../CostList/CostList'
import CostsDiagram from '../CostsDiagram/CostsDiagram'
import './Costs.scss'

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filterYear = props.costs.filter(
    (v) => v.date.getFullYear() === Number(selectedYear)
  )

  return (
    <>
      <Card className='costs'>
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filterYear} />
        <CostList delete={props.delete} filter={filterYear} />
      </Card>
    </>
  )
}

export default Costs
