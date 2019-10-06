import detailsRender from './views/details.js'
import infoRender from './views/info.js'
import descriptionRender from './views/description.js'
import weaknessRender from './views/weakness.js'
import evolutionsRender from './views/evolutions.js'
import { capitalizeWord } from '../../common/capitalize.js'

const elements = {
  details: document.querySelector('[data-js=pokemon-detail]'),
  info: document.querySelector('[data-js=pokemon-info]'),
  description: document.querySelector('[data-js=pokemon-description]'),
  weakness: document.querySelector('[data-js=pokemon-weakness]'),
  evolutions: document.querySelector('[data-js=pokemon-evolution]')
}

Object.keys(elements).map(item => {
  if (!elements[item]) throw new Error(`${item} container was not provided`)
})

const render = callbackData => {
  const { name, id, types, stats } = callbackData.data.basic
  const { flavor_text_entries } = callbackData.data.specie
  const { weakness, chain } = callbackData.data
  const primaryType = capitalizeWord(callbackData.data.basic.types.slice(-1).pop().type.name)

  elements.details.innerHTML = detailsRender(name, id, types)
  elements.info.innerHTML = infoRender(id, stats, primaryType)
  elements.description.innerHTML = descriptionRender(flavor_text_entries[1].flavor_text)
  elements.weakness.innerHTML = weaknessRender(weakness)
  elements.evolutions.innerHTML = evolutionsRender(chain, primaryType)
}

export { render }
