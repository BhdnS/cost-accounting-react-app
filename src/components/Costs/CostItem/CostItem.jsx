import Card from '../../UI/Card/Card'
import CostData from '../CostDate/CostDate'
import CostItemDelete from '../CostItemDelete/CostItemDelete'
import './CostItem.scss'

const CostItem = (props) => {
  const description = props.description
  const amount = props.amount

  return (
    <li>
      <Card className='cost-item'>
        <CostData date={props.date} />
        <div className='cost-item__description'>
          <h2>{description}</h2>
          <div className='cost-item__price'>{`$${amount}`}</div>
        </div>
        <CostItemDelete delete={props.delete} id={props.id} />
      </Card>
    </li>
  )
}

export default CostItem
