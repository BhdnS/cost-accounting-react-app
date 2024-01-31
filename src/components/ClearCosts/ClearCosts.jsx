import usePopup from '../Hooks/usePopup.js'
import '../NewCost/NewCost'
import ButtonDelete from '../UI/ButtonDelete/ButtonDelete'
import Popup from '../UI/Popup/Popup'

const ClearCosts = (props) => {
  const { isVisible, showPopup, hidePopup } = usePopup(false)

  const allClearCostsHandler = () => {
    if (props.costs.length > 0) {
      props.setCosts([])
    }
    hidePopup()
  }

  return (
    <>
      {props.costs.length > 0 && (
        <div className='new-cost '>
          <button onClick={showPopup}>Clear all expenses</button>
          <Popup isVisible={isVisible}>
            {isVisible && (
              <ButtonDelete clear={allClearCostsHandler} cancel={hidePopup} />
            )}
          </Popup>
        </div>
      )}
    </>
  )
}

export default ClearCosts
