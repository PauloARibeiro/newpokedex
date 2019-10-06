const endpoint = 'https://pokeapi.co/api/v2'

// SPECIFIC NAME
const getOneByName = async text => {
  return fetch(`${endpoint}/pokemon/${text}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

// GET ALL
const getAll = async (limit = 0) => {
  return fetch(`${endpoint}/pokemon?limit=18&offset=${limit}`)
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

// GET SPECIE BY ID
const getSpecie = async id => {
  return fetch(`${endpoint}/pokemon-species/${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
}

// GET EVOLUTION CHAIN
const getEvolutionChain = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.chain)
    .catch(err => err)
}

// GET DAMAGE VALUES
const getDamageValues = async types => {
  return Promise.all(
    types.map(type => fetch(`${endpoint}/type/${type.type.name}`).then(res => res.json()))
  )
    .then(res => res)
    .catch(err => err)
}

// ADD AND REMOVE DAMAGE VALUES
const mutateDamageValuesByPokemon = (damageValues, types) => {
  const data = {
    half: [],
    double: []
  }

  damageValues.map(value => {
    value.damage_relations.half_damage_from.map(element => {
      data.half[element.name] = '0.5x'
    })

    value.damage_relations.double_damage_from.map(element => {
      data.double[element.name] = '2x'
    })
  })

  types.map(type => {
    delete data.half[type.type.name]
    delete data.double[type.type.name]
  })

  Object.keys(data.double).map(item => {
    delete data.half[item]
  })

  return data
}

// GET ALL THE INFO
const getAllInfo = async id => {
  const data = await Promise.all([getOneById(id), getSpecie(id)])
    .then(res => res)
    .catch(err => err)
  const damageValues = await getDamageValues(data[0].types)
  const weakness = await mutateDamageValuesByPokemon(damageValues, data[0].types)
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

  return {
    basic: data[0],
    specie: data[1],
    weakness,
    chain
  }
}

export { getOneByName, getAll, getOneById, getAllInfo }
