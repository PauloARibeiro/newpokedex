import { capitalizeWord } from '../../../common/capitalize.js'

export default weakness => {
  return `
    <div>
    ${Object.keys(weakness.double)
      .map(item => {
        const name = capitalizeWord(item)
        return `
        <div class="pokemon-weakness__card d-flex mb-2">
            <div class="${name} pokemon-weakness__card--block mr-2 d-flex d-align-center p-3 color-white h-bold b-radius" >
                ${name}
            </div>
            <div class="pokemon-weakness__card--amount d-flex d-align-center">${weakness.double[item]}</div>
        </div>`
      })
      .join('')}  
    </div>

    <div>
    ${Object.keys(weakness.half)
      .map(item => {
        const name = capitalizeWord(item)
        return `
        <div class="pokemon-weakness__card d-flex mb-2">
            <div class="${name} pokemon-weakness__card--block mr-2  d-flex d-align-center p-3 color-white h-bold b-radius" >
                ${name}
            </div>
            <div class="pokemon-weakness__card--amount d-flex d-align-center">${weakness.half[item]}</div>
        </div>`
      })
      .join('')}  
    </div>
    `
}
