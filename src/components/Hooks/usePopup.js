import { useState } from 'react'

export default function usePopup(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility)

  const showPopup = () => {
    setIsVisible(true)
  }

  const hidePopup = () => {
    setIsVisible(false)
  }

  return {
    isVisible,
    showPopup,
    hidePopup,
  }
}
