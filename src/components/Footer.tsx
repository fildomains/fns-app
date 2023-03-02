import styled, { css } from 'styled-components'

import { mq } from '@ensdomains/thorin'

import SocialDiscord from '../assets/social/SocialDiscord.svg'
import SocialGithub from '../assets/social/SocialGithub.svg'
import SocialMedium from '../assets/social/SocialMedium.svg'
import SocialTwitter from '../assets/social/SocialTwitter.svg'
import { LanugageDropdown } from './LanguageDropdown'
import { SocialIcon } from './SocialIcon'

const Container = styled.footer(
  ({ theme }) => css`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.space['2.5']};
    ${mq.md.min(css`
      display: flex;
      flex-direction: row;
    `)}
  `,
)

const TrailingStack = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: ${theme.space['2']};
    flex-gap: ${theme.space['2']};
  `,
)

const SocialIconContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-gap: ${theme.space['2']};
    gap: ${theme.space['2']};
  `,
)

export const Footer = () => {
  return (
    <Container>
      <LanugageDropdown invert />
      <TrailingStack>
        <SocialIconContainer>
          <SocialIcon Icon={SocialTwitter} color="#5298FF" href="https://twitter.com/fildomains" />
          <SocialIcon Icon={SocialGithub} color="#0F0F0F" href="https://github.com/fildomains" />
          <SocialIcon
            Icon={SocialDiscord}
            color="#7F83FF"
            href="https://discord.com/invite/j8v7MxZKV3"
          />
          <SocialIcon Icon={SocialMedium} color="#0F0F0F" href="https://fildomains.medium.com/" />
        </SocialIconContainer>
      </TrailingStack>
    </Container>
  )
}
