import type { JsonRpcSigner } from '@ethersproject/providers'
import type { TFunction } from 'react-i18next'

import { PublicFNS, Transaction, TransactionDisplayItem } from '@app/types'

type Data = {
  name: string
  address: string
  proverResult: any
}

const displayItems = (
  { name }: Data,
  t: TFunction<'translation', undefined>,
): TransactionDisplayItem[] => [
  {
    label: 'name',
    value: name,
    type: 'name',
  },
  {
    label: 'action',
    value: t('general.importDNSSECName', { ns: 'dnssec' }),
  },
]

const transaction = (signer: JsonRpcSigner, fns: PublicFNS, data: Data) => {
  const tx = fns.importDNSSECName.populateTransaction(data.name, {
    address: data.address,
    proverResult: data.proverResult,
    signer,
  })
  return tx
}

export default {
  displayItems,
  transaction,
} as Transaction<Data>
