import Component from '../common/component.js'
import { getAllInfo } from '../../services/pokemon.js'
import { render } from './lib/render.js'
import { POKEMON_DETAILS } from './lib/actions.js'
import toggleSections from '../common/toggleSections.js'

class PokemonDetail extends Component {
  constructor(id) {
    super(id)

    this.state = {
      list: [],
      toggleSections: true
    }

    this.backToListButton = document.querySelector('[data-js=back-to-list]')

    if (!this.backToListButton) throw new Error('Back to list button was not found')

    this.subscribe(POKEMON_DETAILS, render)
    this.subscribe(POKEMON_DETAILS, toggleSections)
    this.showDetails()
  }

  backToList() {
    this.backToListButton.addEventListener('click', () => toggleSections({ toggleSections: false }))
  }

  showDetails() {
    getAllInfo(this.props)
      .then(res => {
        const callbackData = {
          data: res,
          toggleSections: true
        }
        this.dispatch({ list: res.results }, POKEMON_DETAILS, callbackData)
        this.backToList()
      })
      .catch(err => err)
  }
}

export default PokemonDetail
// export default new PokemonDetail(5)
