import Component from '../common/component.js'
import { getAllInfo } from '../../services/pokemon.js'
import { render } from './lib/render.js'
import { POKEMON_DETAILS } from './lib/actions.js'

class PokemonDetail extends Component {
  constructor(id) {
    super(id)

    this.state = {
      list: []
    }

    this.elements = {
      details: document.querySelector('[data-js=pokemon-detail]'),
      info: document.querySelector('[data-js=pokemon-info]'),
      description: document.querySelector('[data-js=pokemon-description]'),
      weakness: document.querySelector('[data-js=pokemon-weakness]')
    }

    this.subscribe(POKEMON_DETAILS, render)
    this.showDetails()
  }

  showDetails() {
    getAllInfo(this.props)
      .then(res => {
        const callbackData = {
          data: res,
          elements: this.elements
        }
        this.dispatch({ list: res.results }, POKEMON_DETAILS, callbackData)
        resolve(true)
      })
      .catch(err => err)
  }
}

export default new PokemonDetail(1)
