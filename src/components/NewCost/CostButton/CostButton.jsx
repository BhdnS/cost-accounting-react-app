import '../NewCost.scss'

const CostButton = (props) => {
  return (
    <div className='new-cost'>
      <button onClick={props.inputCostVisible}>Add a new expense</button>
    </div>
  )
}

export default CostButton
