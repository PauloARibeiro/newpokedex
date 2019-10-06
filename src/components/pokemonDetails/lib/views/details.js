import { capitalizeWord } from '../../../common/capitalize.js'
import idConvert from '../../../common/idConverter.js'

export default (name, id, types) => {
  types = types.reverse()

  return `
    <h2 class="pokemon-detail__title--name h-bold t-capitalize">
      ${name} <span class="color-darker-grey">#${idConvert(id)}</span>
    </h2>
    <div class="d-flex">
      ${types
        .map(type => {
          let { name } = type.type
          name = capitalizeWord(name)

          return `<h5 class="${name} pokemon-detail__title--type color-white p-2 ml-2 b-radius">${name}</h5>`
        })
        .join('')}
    </div>`
}
