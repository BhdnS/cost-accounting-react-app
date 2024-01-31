import './ButtonDelete.scss'

const ButtonDelete = (props) => {
  return (
    <div className='button-container'>
      <h2 className='btn-title'>Are you sure?</h2>
      <div>
        <button className='btn' onClick={props.clear} type='button'>
          Yes
        </button>
        <button className='btn' onClick={props.cancel} type='button'>
          No
        </button>
      </div>
    </div>
  )
}

export default ButtonDelete
