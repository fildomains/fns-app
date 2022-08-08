import { DevSection } from '@app/components/pages/profile/settings/DevSection'
import { PrimarySection } from '@app/components/pages/profile/settings/PrimarySection'
import { TransactionSection } from '@app/components/pages/profile/settings/TransactionSection'
import { WalletSection } from '@app/components/pages/profile/settings/WalletSection'
import { useProtectedRoute } from '@app/hooks/useProtectedRoute'
import { Content } from '@app/layouts/Content'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { useAccount } from 'wagmi'

const OtherWrapper = styled.div(
  ({ theme }) => css`
    grid-area: other;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: ${theme.space['3']};
    flex-gap: ${theme.space['3']};
  `,
)

const spacing = '1fr'

export default function Page() {
  const { t } = useTranslation('settings')
  const { data: addressData, isLoading } = useAccount()

  useProtectedRoute('/', isLoading ? true : addressData)

  return (
    <Content singleColumnContent title={t('title')} spacing={spacing}>
      {{
        leading: null,
        trailing: (
          <OtherWrapper>
            <WalletSection />
            <PrimarySection />
            <TransactionSection />
            {process.env.NEXT_PUBLIC_PROVIDER && <DevSection />}
          </OtherWrapper>
        ),
      }}
    </Content>
  )
}
