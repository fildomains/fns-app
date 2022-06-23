import TripleDot from '@app/assets/TripleDot.svg'
import { useAvatar } from '@app/hooks/useAvatar'
import { useZorb } from '@app/hooks/useZorb'
import { Avatar, Button, Tooltip, Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'

const Container = styled.div<{ $banner?: string }>(
  ({ theme, $banner }) => css`
    padding: ${theme.space['6']};
    padding-top: ${theme.space['16']};
    background-image: ${$banner
      ? `url(${$banner})`
      : theme.colors.gradients.blue};
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 100% ${theme.space['28']};
    background-color: ${theme.colors.background};
    border-radius: ${theme.radii['2xLarge']};
    border: ${theme.space.px} solid ${theme.colors.borderTertiary};
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${theme.space['3']};
    flex-gap: ${theme.space['3']};
  `,
)

const AvatarWrapper = styled.div(
  ({ theme }) => css`
    width: ${theme.space['24']};
  `,
)

const DetailStack = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-gap: ${theme.space['2']};
    gap: ${theme.space['2']};
    align-items: center;
  `,
)

const Name = styled(Typography)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.extraLarge};
  `,
)

const TextStack = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${theme.space['1']};
    flex-gap: ${theme.space['1']};
  `,
)

const FirstItems = styled.div(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  `,
)

const DetailButtonWrapper = styled.div<{ $placement?: 'inline' | 'bottom' }>(
  ({ theme, $placement }) => css`
    ${$placement === 'bottom' && 'width: 100%;'}
    & > button {
      border: ${theme.space.px} solid ${theme.colors.borderSecondary};
      border-radius: ${theme.radii.extraLarge};
      padding: ${theme.space['2']};
    }
  `,
)

const ButtonStack = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,
)

const TripleDotIcon = styled.div(
  ({ theme }) => css`
    display: block;
    box-sizing: border-box;
    width: ${theme.space['4']};
    height: ${theme.space['4']};
  `,
)

export const ProfileSnippet = ({
  banner,
  recordName,
  name,
  description,
  url,
  button,
  buttonPlacement = 'inline',
  network,
}: {
  name: string
  banner?: string
  recordName?: string
  description?: string
  url?: string
  button?: 'viewDetails' | 'viewProfile'
  buttonPlacement?: 'inline' | 'bottom'
  network: number
}) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const zorb = useZorb(name, 'name')
  const { avatar } = useAvatar(name, network)

  return (
    <Container $banner={banner} data-testid="profile-snippet">
      <FirstItems>
        <AvatarWrapper>
          <Avatar label={name} src={avatar || zorb} />
        </AvatarWrapper>
        <ButtonStack>
          {button && buttonPlacement === 'inline' && (
            <DetailButtonWrapper $placement={buttonPlacement}>
              <Button
                onClick={() =>
                  router.push({
                    pathname:
                      button === 'viewDetails'
                        ? `/profile/${name}/details`
                        : `/profile/${name}`,
                    query: {
                      from: router.asPath,
                    },
                  })
                }
                shadowless
                variant="transparent"
                size="extraSmall"
              >
                {t(`wallet.${button}`)}
              </Button>
            </DetailButtonWrapper>
          )}
          <Tooltip content="in development">
            <Button shadowless variant="transparent" size="extraSmall">
              <TripleDotIcon as={TripleDot} />
            </Button>
          </Tooltip>
        </ButtonStack>
      </FirstItems>
      <TextStack>
        <DetailStack>
          <Name weight="bold">{name}</Name>
          {recordName && (
            <div style={{ marginTop: '4px' }}>
              <Typography weight="bold" color="textTertiary">
                {recordName}
              </Typography>
            </div>
          )}
        </DetailStack>
        {description && <Typography>{description}</Typography>}
        {url && (
          <div style={{ width: 'min-content' }}>
            <a href={url}>
              <Typography color="blue">
                {url?.replace(/http(s?):\/\//g, '').replace(/\/$/g, '')}
              </Typography>
            </a>
          </div>
        )}
      </TextStack>
      {button && buttonPlacement === 'bottom' && (
        <DetailButtonWrapper $placement={buttonPlacement}>
          <Button
            onClick={() =>
              router.push({
                pathname:
                  button === 'viewDetails'
                    ? `/profile/${name}/details`
                    : `/profile/${name}`,
                query: {
                  from: router.asPath,
                },
              })
            }
            shadowless
            variant="transparent"
            size="extraSmall"
          >
            {t(`wallet.${button}`)}
          </Button>
        </DetailButtonWrapper>
      )}
    </Container>
  )
}
