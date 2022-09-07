import { ReturnedName } from '@app/hooks/useNamesFromAddress'
import { mq, Tag } from '@ensdomains/thorin'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { NameDetailItem } from './NameDetailItem'

const OtherItemsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: ${theme.space['2']};
    flex-gap: ${theme.space['2']};
    ${mq.md.min(css`
      flex-direction: row;
      gap: ${theme.space['4']};
      flex-gap: ${theme.space['4']};
    `)}
  `,
)

export const TaggedNameItem = ({
  name,
  isController,
  isRegistrant,
  network,
  truncatedName,
  mode,
  selected,
  onClick,
}: Omit<ReturnedName, 'labelName' | 'labelhash' | 'isMigrated' | 'parent' | 'type' | 'id'> & {
  network: number
  selected?: boolean
  mode?: 'select' | 'view'
  onClick?: () => void
}) => {
  const { t } = useTranslation('common')

  const isNativeEthName = /\.eth$/.test(name) && name.split('.').length === 2

  return (
    <NameDetailItem
      key={name}
      network={network}
      truncatedName={truncatedName}
      name={name}
      mode={mode}
      selected={selected}
      onClick={onClick}
    >
      <OtherItemsContainer>
        <Tag tone={isController ? 'accent' : 'secondary'}>{t('name.manager')}</Tag>
        {isNativeEthName && (
          <Tag tone={isRegistrant ? 'accent' : 'secondary'}>{t('name.owner')}</Tag>
        )}
      </OtherItemsContainer>
    </NameDetailItem>
  )
}
