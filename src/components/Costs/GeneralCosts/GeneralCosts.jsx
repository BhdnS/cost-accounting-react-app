import Card from '../../UI/Card/Card'
import './GeneralCosts.scss'

const GeneralCosts = (props) => {
  const sum = props.filter.reduce((acc, i) => {
    return acc + +i.amount
  }, 0)

  return (
    <Card className='general'>
      <div className='general-content'>
        <h2 className='general-text'>Amount for the year:</h2>
        <h2 className='general-text'>{sum}$</h2>
      </div>
    </Card>
  )
}

export default GeneralCosts
