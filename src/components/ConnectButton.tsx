import { useAvatar } from '@app/hooks/useAvatar'
import { useChainId } from '@app/hooks/useChainId'
import { usePrimary } from '@app/hooks/usePrimary'
import { useZorb } from '@app/hooks/useZorb'
import { useBreakpoint } from '@app/utils/BreakpointProvider'
import { Button, mq, Profile } from '@ensdomains/thorin'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { useAccount, useDisconnect } from 'wagmi'

const StyledButtonWrapper = styled.div<{ $isTabBar?: boolean }>(({ theme, $isTabBar }) =>
  $isTabBar
    ? css`
        align-self: flex-end;
        justify-self: flex-end;
        & button {
          padding: 0 ${theme.space['4']};
          width: ${theme.space.full};
          height: ${theme.space['12']};
          border-radius: ${theme.radii.full};
          font-size: ${theme.fontSizes.base};
          ${mq.xs.min(css`
            padding: 0 ${theme.space['8']};
          `)}
        }
      `
    : css`
        & button {
          border-radius: ${theme.radii['2xLarge']};
        }
      `,
)

export const ConnectButton = ({ isTabBar }: { isTabBar?: boolean }) => {
  const { t } = useTranslation('common')
  const breakpoints = useBreakpoint()
  const { openConnectModal } = useConnectModal()

  return (
    <StyledButtonWrapper $isTabBar={isTabBar}>
      <Button
        data-testid={isTabBar ? 'tabbar-connect-button' : 'connect-button'}
        onClick={() => openConnectModal?.()}
        variant="primary"
        size={breakpoints.md ? 'medium' : 'extraSmall'}
      >
        {t('wallet.connect')}
      </Button>
    </StyledButtonWrapper>
  )
}

const HeaderProfile = ({ address }: { address: string }) => {
  const { t } = useTranslation('common')

  const { name } = usePrimary(address!, !address)
  const chainId = useChainId()
  const { avatar } = useAvatar(name || undefined, chainId)
  const zorb = useZorb(address, 'address')
  const { disconnect } = useDisconnect()

  return (
    <Profile
      address={address}
      ensName={name || undefined}
      dropdownItems={[
        {
          label: t('wallet.myProfile'),
          wrapper: (children, key) => (
            <Link href="/my/profile" key={key}>
              {children}
            </Link>
          ),
          as: 'a',
          color: 'text',
        },
        {
          label: t('wallet.disconnect'),
          color: 'red',
          onClick: () => disconnect(),
        },
      ]}
      avatar={avatar || zorb}
      size="medium"
      alignDropdown="right"
    />
  )
}

export const HeaderConnect = () => {
  const { address } = useAccount()

  if (!address) {
    return <ConnectButton />
  }

  return <HeaderProfile address={address} />
}
