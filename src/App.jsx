import { useEffect, useState } from 'react'
import ClearCosts from './components/ClearCosts/ClearCosts'
import Costs from './components/Costs/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

function App() {
  const [costs, setCosts] = useState([])

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    })
  }

  const deleteItemHandler = (id) => {
    const deleteCosts = costs.filter((e) => e.id !== id)
    setCosts(deleteCosts)
  }

  useEffect(() => {
    const costsData = JSON.parse(localStorage.getItem('costData'))
    if (costsData) {
      costsData.forEach((e) => {
        e.date = new Date(e.date)
      })
      setCosts(costsData)
    }
    return
  }, [])

  useEffect(() => {
    localStorage.setItem('costData', JSON.stringify(costs))
  }, [costs])

  return (
    <div className='app'>
      <Costs delete={deleteItemHandler} costs={costs} />
      <NewCost onAddCost={addCostHandler} />
      <ClearCosts costs={costs} setCosts={setCosts} />
    </div>
  )
}

export default App
