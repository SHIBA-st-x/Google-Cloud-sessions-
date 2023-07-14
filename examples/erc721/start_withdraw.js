const { getPlasmaClient, plasma, from } = require('../utils')

const token = plasma.child.erc721
const tokenId721 = 1963
async function execute () {
  const plasmaClient = await getPlasmaClient()
  const erc721Token = plasmaClient.erc721(token)
  const result = await erc721Token.withdrawStart(tokenId721)
  const txHash = await result.getTransactionHash()
  const txReceipt = await result.getReceipt()
  console.log(txReceipt)
}

execute()
  .then(console.log)
  .catch(console.log)
  .finally(_ => {
    process.exit(0)
  })
