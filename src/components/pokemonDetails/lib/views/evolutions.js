export default (evolutions, primaryType) => {
  return `
    ${evolutions
      .map(evolution => {
        const { name, id } = evolution
        return ` 
        <div class="pokemon-evolution__card d-flex d-flex-direction-column d-align-center">
            <img
                class="border-${primaryType}"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
                alt="name"
            />
            <span class="h-bold mt-2 t-capitalize">${name}</span>
        </div>`
      })
      .join('')}
   
    `
}
