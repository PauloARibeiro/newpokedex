import detailsRender from './views/details.js'
import infoRender from './views/info.js'
import descriptionRender from './views/description.js'
import weaknessRender from './views/weakness.js'

const render = callbackData => {
  const { name, id, types, stats } = callbackData.data.basic
  const { flavor_text_entries } = callbackData.data.specie
  const { elements } = callbackData

  console.log(callbackData)

  elements.details.innerHTML = detailsRender(name, id, types)
  elements.info.innerHTML = infoRender(id, stats)
  elements.description.innerHTML = descriptionRender(flavor_text_entries[1].flavor_text)
  elements.weakness.innerHTML = weaknessRender(flavor_text_entries[1].flavor_text)
}

export { render }
