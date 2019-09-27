import Component from '../common/component.js'
import { getOneById } from '../../services/pokemon.js'
import { render } from './lib/render.js'
import { POKEMON_DETAILS } from './lib/actions.js'

class PokemonDetail extends Component {
  constructor(id) {
    super(id)

    this.state = {
      list: []
    }

    this.subscribe(POKEMON_DETAILS, render)
    this.showDetails()
  }

  showDetails() {
    getOneById(this.props)
      .then(res => render(res))
      .catch(err => err)

    getOneById(this.props)
      .then(res => {
        const callbackData = {
          data: res.results,
          element: this.list
        }
        this.dispatch({ list: res.results }, UPDATE_LIST, callbackData)
        this.listCardsEvent()
        resolve(true)
      })
      .catch(err => reject(err))
  }
}

export default new PokemonDetail(1)
