import Component from '../common/component.js'
import { getAll } from '../../services/pokemon.js'
import { render } from './lib/render.js'
import { UPDATE_LIST } from './lib/actions.js'

class PokemonList extends Component {
  constructor() {
    super()

    this.state = {
      limit: 0,
      list: []
    }

    this.list = document.querySelector('[data-js=pokemon-list]')
    this.next = document.querySelector('[data-js=next]')
    this.back = document.querySelector('[data-js=back]')

    if (!this.list) throw new Error('List was not found')
    if (!this.next) throw new Error('Next button was not found')
    if (!this.back) throw new Error('Back button was not found')

    this.subscribe(UPDATE_LIST, render)
    this.listPokemon(this.state.limit)
    this.nextButtonEvent()
    this.backButtonEvent()
  }

  // LIST CARD CLICK
  listCardsEvent() {
    document.querySelectorAll('[data-js=pokemon]').forEach(card => {
      card.addEventListener('click', () => console.log(true))
    })
  }

  // NEXT BUTTON CLICK
  nextButtonEvent() {
    this.next.addEventListener('click', () => {
      this.next.classList.add('disabled')
      this.back.classList.remove('disabled')

      this.setState({ limit: this.state.limit + 20 })
      this.listPokemon(this.state.limit).then(() => this.next.classList.remove('disabled'))
    })
  }

  // BACK BUTTON CLICK
  backButtonEvent() {
    this.back.addEventListener('click', () => {
      this.back.classList.add('disabled')

      this.setState({ limit: this.state.limit - 20 })
      this.listPokemon(this.state.limit).then(() => {
        this.state.limit > 0
          ? this.back.classList.remove('disabled')
          : this.back.classList.add('disabled')
      })
    })
  }

  // LIST POKEMON
  async listPokemon(limit) {
    if (limit < 0) throw new Error('Limit was not provied or is below 0')

    return new Promise((resolve, reject) => {
      getAll(limit)
        .then(res => {
          const callbackData = {
            data: res.results,
            element: this.list,
            limit: this.state.limit
          }
          this.dispatch({ list: res.results }, UPDATE_LIST, callbackData)
          this.listCardsEvent()
          resolve(true)
        })
        .catch(err => reject(err))
    })
  }
}

export default new PokemonList()
