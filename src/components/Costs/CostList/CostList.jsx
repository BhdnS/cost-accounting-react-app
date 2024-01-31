import CostItem from '../CostItem/CostItem'
import GeneralCosts from '../GeneralCosts/GeneralCosts'
import './CostList.scss'

const CostList = (props) => {
  if (props.filter.length === 0) {
    return (
      <h2 className='cost-list__fallback'>There are no expenses this year</h2>
    )
  }

  return (
    <ul className='cost-list'>
      {props.filter.map((e) => {
        return (
          <CostItem
            date={e.date}
            description={e.description}
            amount={e.amount}
            id={e.id}
            key={e.id}
            delete={props.delete}
          />
        )
      })}
      <GeneralCosts filter={props.filter} />
    </ul>
  )
}

export default CostList
