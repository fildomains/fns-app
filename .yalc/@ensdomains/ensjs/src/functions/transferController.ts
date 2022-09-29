import { ethers } from 'ethers'
import { ENSArgs } from '..'

export default async function (
  { contracts, signer }: ENSArgs<'contracts' | 'signer'>,
  name: string,
  {
    newOwner,
  }: {
    newOwner: string
  },
) {
  const baseRegistrar = (await contracts?.getBaseRegistrar())!.connect(signer)
  const labels = name.split('.')
  if (labels.length > 2 || labels[labels.length - 1] !== 'eth') {
    throw new Error('Invalid name for baseRegistrar')
  }
  return baseRegistrar.populateTransaction.reclaim(
    ethers.utils.solidityKeccak256(['string'], [labels[0]]),
    newOwner,
  )
}
