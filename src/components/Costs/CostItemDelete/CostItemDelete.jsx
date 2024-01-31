import usePopup from '../../Hooks/usePopup'
import ButtonDelete from '../../UI/ButtonDelete/ButtonDelete'
import Popup from '../../UI/Popup/Popup'
import './CostItemDelete.scss'

const CostItemDelete = (props) => {
  const { isVisible, showPopup, hidePopup } = usePopup(false)
  const deleteItemHandler = () => {
    props.delete(props.id)
  }

  return (
    <>
      <button className='cost-button' type='button' onClick={showPopup}>
        Delete
      </button>
      <Popup isVisible={isVisible}>
        {isVisible && (
          <ButtonDelete clear={deleteItemHandler} cancel={hidePopup} />
        )}
      </Popup>
    </>
  )
}

export default CostItemDelete
