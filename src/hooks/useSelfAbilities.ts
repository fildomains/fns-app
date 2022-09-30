import { useMemo } from 'react'

import type { ENS } from '@ensdomains/ensjs'

export const useSelfAbilities = (
  address: string | undefined,
  ownerData: Awaited<ReturnType<ENS['getOwner']>> | undefined,
) => {
  return useMemo(() => {
    const abilities = {
      canEdit: false,
      canSend: true,
      canChangeOwner: false,
      canChangeRegistrant: false,
    }
    if (!address || !ownerData) return abilities
    if (
      ownerData.registrant === address ||
      (!ownerData.registrant && ownerData.owner === address)
    ) {
      abilities.canSend = true
      abilities.canChangeOwner = false
      abilities.canChangeRegistrant = true
    }
    if (ownerData.owner === address) {
      abilities.canEdit = true
      abilities.canChangeOwner = true
    }
    return abilities
  }, [address, ownerData])
}
