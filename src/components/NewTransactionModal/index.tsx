import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Overlay, Content, Form, CloseBtn } from './styles'
import { X } from 'phosphor-react'

export const NewTransactionModal: React.FC = () => (
  <Dialog.Portal>
    <Overlay />

    <Content>
      <CloseBtn>
        <X size={24} />
      </CloseBtn>
      <Dialog.Title>New transaction</Dialog.Title>

      <Form action="">
        <input type="text" placeholder="Description" required />
        <input type="number" placeholder="Price" required />
        <input type="text" placeholder="Category" required />

        <button type="submit"> Register </button>
      </Form>
    </Content>
  </Dialog.Portal>
)
