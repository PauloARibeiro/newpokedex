import idConvert from '../../../common/idConverter.js'

export default (id, stats, primaryType) => {
  stats = stats.reverse()

  return `
    <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idConvert(id)}.png"
        alt="#"
        class="pokemon-info__image mr-5"
    />

    <div class="d-flex w-100">
        <div class="pokemon-info__stats">
            <div class="pokemon-info__stats--stat mb-1 d-flex d-align-center mr-4">HP</div>
            <div class="pokemon-info__stats--stat mb-1 d-flex d-align-center mr-4">Attack</div>
            <div class="pokemon-info__stats--stat mb-1 d-flex d-align-center mr-4">Defense</div>
            <div class="pokemon-info__stats--stat mb-1 d-flex d-align-center mr-4">Speed</div>
            <div class="pokemon-info__stats--stat mb-1 d-flex d-align-center mr-4">Sp Atk</div>
            <div class="pokemon-info__stats--stat mb-1 d-flex d-align-center mr-4">Sp Def</div>
        </div>

        <div class="pokemon-info__bars w-100">
            ${stats
              .map(stat => {
                return `
                    <div class="pokemon-info__bars--bar bg-darker-grey color-white p-2 mb-1 b-radius">
                        <div style="width: ${stat.base_stat /
                          2}%" class="pokemon-info__bars--bar-color ${primaryType} b-radius-left d-flex d-align-center pl-2">
                            ${stat.base_stat}
                        </div>
                    </div>`
              })
              .join('')}

        </div>
    </div>

    
    `
}
