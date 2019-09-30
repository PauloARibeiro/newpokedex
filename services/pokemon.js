const endpoint = 'https://pokeapi.co/api/v2'

// SPECIFIC SEARCH
const getOneByName = async text => {
  return fetch(`${endpoint}/pokemon/${text}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

// GET ALL
const getAll = async (limit = 0) => {
  return fetch(`${endpoint}/pokemon?limit=21&offset=${limit}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

// GET ONE BY ID
const getOneById = async id => {
  return fetch(`${endpoint}/pokemon/${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

const getSpecie = async id => {
  return fetch(`${endpoint}/pokemon-species/${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

const getEvolutionChain = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.chain)
    .catch(err => err)
}

const getAllInfo = async id => {
  const data = await Promise.all([getOneById(id), getSpecie(id)])
    .then(res => res)
    .catch(err => err)

  let evolutionChain = await getEvolutionChain(data[1].evolution_chain.url)
  let chain = []

  while (evolutionChain && evolutionChain.hasOwnProperty('evolves_to')) {
    const { species } = evolutionChain

    chain.push({
      name: species.name,
      id: species.url.split('/')[6]
    })

    evolutionChain = evolutionChain['evolves_to'][0]
  }

  console.log({ basic: data[0], specie: data[1], chain })
  return {
    basic: data[0],
    specie: data[1],
    chain
  }
}

export { getOneByName, getAll, getOneById, getAllInfo }
