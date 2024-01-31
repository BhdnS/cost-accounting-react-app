import { useState } from 'react'
import './CostForm.scss'

const CostForm = (props) => {
  const [isWarning, setIsWarning] = useState(false)
  const [userInput, setUserInput] = useState({
    description: '',
    amount: '',
    date: '',
  })

  const { description, amount, date } = userInput

  const nameChangeHandler = (e) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        description: e.target.value,
      }
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: e.target.value,
      }
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        date: e.target.value,
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (description !== '' && amount !== '' && date !== '') {
      const costData = {
        description: description,
        amount: amount,
        date: new Date(date),
      }
      props.onSaveCostData(costData)

      setUserInput({
        description: '',
        amount: '',
        date: '',
      })
    } else {
      setIsWarning(true)
    }
  }

  return (
    <form className='new-cost new-cost__position' onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Name</label>
          <input type='text' onChange={nameChangeHandler} value={description} />
        </div>
        <div className='new-cost__control'>
          <label>Sum</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-cost__control'>
          <label>Date</label>
          <input
            type='date'
            lang='en'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className='new-cost__action'>
          <button type='submit'>Add expense</button>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
      {isWarning && (
        <h3 className='new-cost__warning'>Fill in all the fields!!!</h3>
      )}
    </form>
  )
}

export default CostForm
