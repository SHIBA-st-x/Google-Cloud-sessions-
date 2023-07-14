const { getPlasmaClient, from, plasma } = require('../utils')

const execute = async () => {
  const plasmaClient = await getPlasmaClient()
  const erc721Token = plasmaClient.erc721(plasma.child.erc721)

  // get 5 tokens of the user
  const balance = await erc721Token.getAllTokens(from)
  console.log(balance)
}

execute().then(() => {
}).catch(err => {
  console.error('err', err)
}).finally(_ => {
  process.exit(0)
})
