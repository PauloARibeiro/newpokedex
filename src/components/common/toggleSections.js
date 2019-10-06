import { capitalizeWord } from './capitalize.js'

const container = document.querySelector('[data-js=container]')
const listContainer = document.querySelector('[data-js=pokemon-list-container]')
const detailContainer = document.querySelector('[data-js=pokemon-detail-container]')
const breaks = document.querySelectorAll('[data-js=break]')
const backToListButton = document.querySelector('[data-js=back-to-list]')
const backButton = document.querySelector('[data-js=back]')

if (!container) throw new Error('Container was not found')
if (!listContainer) throw new Error('List container was not found')
if (!detailContainer) throw new Error('Details container was not found')
if (!backToListButton) throw new Error('Back to list button was not found')
if (!backButton) throw new Error('Back button was not found')

let primaryType = ''

const toggleSections = callBackData => {
  const { toggleSections } = callBackData

  if (toggleSections) {
    primaryType = capitalizeWord(callBackData.data.basic.types[0].type.name)

    container.style.overflowY = 'scroll'
    listContainer.classList.add('hide')
    backButton.classList.add('hide')
    detailContainer.classList.remove('hide')
    backToListButton.classList.remove('hide')

    breaks.forEach(element => element.classList.add(`${primaryType}`))
  } else {
    container.style.overflowY = 'unset'
    listContainer.classList.remove('hide')
    backButton.classList.remove('hide')
    detailContainer.classList.add('hide')
    backToListButton.classList.add('hide')

    breaks.forEach(element => element.classList.remove(`${primaryType}`))
  }
}

export default toggleSections
