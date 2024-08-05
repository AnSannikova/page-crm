const oderButtons = document.querySelectorAll('.pagecrm_tariff-card__button')
const popups = document.querySelectorAll('.pagecrm_popup')
const popupTypeForm = document.querySelector('.pagecrm_popup_type-form')
const popupTypeSuccess = document.querySelector('.pagecrm_popup_type-success')
const popupForm = document.forms['popup-form']

const openPopup = (popup) => {
  popup.classList.add('pagecrm_popup-is-open')
  document.addEventListener('keydown', closePopupOnEscPress)
}

const closePopup = (popup) => {
  popup.classList.remove('pagecrm_popup-is-open')
  document.removeEventListener('keydown', closePopupOnEscPress)
}

const closePopupOnEscPress = (evt) => {
  if (evt.key === 'Escape') {
    popup.classList.remove('pagecrm_popup-is-open')
  }
}

const closePopupOnBackdropClick = (evt) => {
  const openedPopup = document.querySelector('.pagecrm_popup-is-open')
  if (evt.currentTarget === evt.target) closePopup(openedPopup)
}

const popupFormOnSubmit = (evt) => {
  evt.preventDefault()
  closePopup(popupTypeForm)
  openPopup(popupTypeSuccess)
}

oderButtons.forEach((button) =>
  button.addEventListener('click', () => openPopup(popupTypeForm))
)

popups.forEach((popup) =>
  popup.addEventListener('mousedown', closePopupOnBackdropClick)
)

popupForm.addEventListener('submit', popupFormOnSubmit)
