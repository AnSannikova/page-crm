//  Модальные окна

const page = document.querySelector('.pagecrm_page');
const oderButtons = document.querySelectorAll('.pagecrm_tariff-card__button');
const popups = document.querySelectorAll('.pagecrm_popup');
const popupTypeForm = document.querySelector('.pagecrm_popup_type-form');
const popupForm = document.forms['popup-form'];
const popupTypeSuccess = document.querySelector('.pagecrm_popup_type-success');
const popupSuccessCloseButton = document.querySelector(
  '.pagecrm_popup-success__button'
);

const openPopup = (popup) => {
  popup.classList.add('pagecrm_popup-is-open');
  page.classList.add('pagecrm_scroll-lock');
  document.addEventListener('keydown', closePopupOnEscPress);
};

const closePopup = (popup) => {
  popup.classList.remove('pagecrm_popup-is-open');
  page.classList.remove('pagecrm_scroll-lock');
  document.removeEventListener('keydown', closePopupOnEscPress);
};

const closePopupOnEscPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.pagecrm_popup-is-open');
    closePopup(openedPopup);
  }
};

const closePopupOnBackdropClick = (evt) => {
  const openedPopup = document.querySelector('.pagecrm_popup-is-open');
  if (evt.currentTarget === evt.target) closePopup(openedPopup);
};

const popupFormOnSubmit = (evt) => {
  evt.preventDefault();
  closePopup(popupTypeForm);
  openPopup(popupTypeSuccess);
};

oderButtons.forEach((button) =>
  button.addEventListener('click', () => openPopup(popupTypeForm))
);

popups.forEach((popup) =>
  popup.addEventListener('mousedown', closePopupOnBackdropClick)
);

popupForm.addEventListener('submit', popupFormOnSubmit);

popupSuccessCloseButton.addEventListener('click', () =>
  closePopup(popupTypeSuccess)
);

//  Кастомный селект

const systemSelect = document.querySelector('.pagecrm_system-select');
const servicesSelect = document.querySelector('.pagecrm_services-select');

const onOptionClick = (evt, selectText) => {
  selectText.textContent = evt.target.textContent;
};

const onSelectClick = (evt, select) => {
  const optionsBlock = evt.currentTarget.querySelector(
    '.pagecrm_form__dropdown-options'
  );
  const options = optionsBlock.querySelectorAll(
    '.pagecrm_form__dropdown-option'
  );
  const selectText = evt.currentTarget.querySelector('.pagecrm_select-text');

  if (optionsBlock.classList.contains('pagecrm_form__dropdown-is-open')) {
    options.forEach((option) =>
      option.removeEventListener('click', (evt) =>
        onOptionClick(evt, selectText)
      )
    );
    optionsBlock.classList.remove('pagecrm_form__dropdown-is-open');
  } else {
    optionsBlock.classList.add('pagecrm_form__dropdown-is-open');
    options.forEach((option) =>
      option.addEventListener('click', (evt) => onOptionClick(evt, selectText))
    );
  }
};

systemSelect.addEventListener('click', (evt) =>
  onSelectClick(evt, systemSelect)
);

servicesSelect.addEventListener('click', (evt) =>
  onSelectClick(evt, servicesSelect)
);
