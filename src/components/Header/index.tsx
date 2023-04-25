import React from 'react'
import { ReactComponent as LogoFull } from '~/assets/logo-full.svg'
import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoFull />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransationButton type="button" contentEditable={false}>
            New Transaction
          </NewTransationButton>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content>
            <Dialog.Title>New transaction</Dialog.Title>

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
)
