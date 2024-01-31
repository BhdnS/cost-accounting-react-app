import usePopup from '../Hooks/usePopup'
import Popup from '../UI/Popup/Popup'
import CostButton from './CostButton/CostButton'
import CostForm from './CostForm/CostForm'
import './NewCost.scss'

const NewCost = (props) => {
  const { isVisible, showPopup, hidePopup } = usePopup(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: new Date().getTime().toString(),
    }
    props.onAddCost(costData)
    hidePopup()
  }

  return (
    <div>
      <CostButton inputCostVisible={showPopup} />
      <Popup isVisible={isVisible}>
        {isVisible && (
          <CostForm onCancel={hidePopup} onSaveCostData={saveCostDataHandler} />
        )}
      </Popup>
    </div>
  )
}

export default NewCost
