import idConvert from '../../common/idConverter.js'

const list = document.querySelector('[data-js=pokemon-list]')

if (!list) throw new Error('List was not found')

const render = callbackData => {
  if (!callbackData) throw new Error('Callback data was not provied')

  const { data, limit } = callbackData

  list.innerHTML = data
    .map((item, index) => {
      const currentIndex = index + 1 + limit
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentIndex}.png`

      return `
        <div data-js-id="${currentIndex}" data-js="pokemon" class="h-bold pokemon-list__card m-1 pl-3 pb-2 pr-3 b-radius b-shadow bg-white">
            <div class="d-flex d-justify-center">
                <img class="pokemon-list__card--img" src="${image}" />
            </div>    
            <div class="pokemon-list__card--info d-flex d-align-center d-justify-between">
              <h4 class="pokemon-list__card--name t-capitalize m-0">${item.name}</h4>
              <h6 class="pokemon-list__card--id m-0 color-darker-grey t-regular">${idConvert(
                currentIndex
              )}</h6>
            </div>
        </div>`
    })
    .join('')
}

export { render }
