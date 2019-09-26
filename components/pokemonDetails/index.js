import Component from '../common/component.js'
import { getOneById } from '../../services/pokemon.js'
import { render } from './lib/render.js'

class PokemonDetail extends Component {
  constructor(id) {
    super(id)

    this.showDetails()
  }

  showDetails() {
    getOneById(this.props)
      .then(res => render(res))
      .catch(err => err)
  }
}

export default new PokemonDetail(1)
