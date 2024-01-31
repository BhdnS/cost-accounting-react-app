import './Popup.scss'

const Popup = (props) => {
  return (
    <div className={`overlay ${props.isVisible ? 'active' : ''}`}>
      <div className='popup'>{props.children}</div>
    </div>
  )
}

export default Popup
