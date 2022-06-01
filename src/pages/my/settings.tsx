import { DevSection } from '@app/components/settings/DevSection'
import { TransactionSection } from '@app/components/settings/TransactionSection'
import { WalletSection } from '@app/components/settings/WalletSection'
import { useProtectedRoute } from '@app/hooks/useProtectedRoute'
import { Basic } from '@app/layouts/Basic'
import mq from '@app/mediaQuery'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'
import { useAccount } from 'wagmi'

const WrapperGrid = styled.div<{ $hasError?: boolean }>`
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space['5']};
  align-self: center;
  grid-template-areas: 'transactions transactions' 'other other';
  ${mq.lg.min`
      grid-template-areas: "transactions other";
      grid-template-columns: 1fr 1fr;
    `}
`

const OtherWrapper = styled.div`
  grid-area: other;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: ${({ theme }) => theme.space['3']};
  flex-gap: ${({ theme }) => theme.space['3']};
`

const SettingsPage: NextPage = () => {
  const { data: addressData, isLoading } = useAccount()

  useProtectedRoute('/', isLoading ? true : addressData)

  return (
    <Basic title="Settings -" heading="Settings" loading={isLoading}>
      <WrapperGrid>
        <TransactionSection />
        <OtherWrapper>
          <WalletSection />
          <DevSection />
        </OtherWrapper>
      </WrapperGrid>
    </Basic>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}

export default SettingsPage
