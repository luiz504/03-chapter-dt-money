import React from 'react'
import { ReactComponent as LogoFull } from '~/assets/logo-full.svg'
import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoFull />

      <NewTransationButton type="button" contentEditable={false}>
        New Transaction
      </NewTransationButton>
    </HeaderContent>
  </HeaderContainer>
)
