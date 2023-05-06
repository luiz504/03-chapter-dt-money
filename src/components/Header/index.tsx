import { ReactComponent as LogoFull } from '~/assets/logo-full.svg'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'
import { Plus } from 'phosphor-react'

export const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoFull />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransationButton type="button" contentEditable={false}>
            <Plus size={24} weight="bold" />
            <span>New Transaction</span>
          </NewTransationButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
)
