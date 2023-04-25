import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import {
  Overlay,
  Content,
  Form,
  CloseBtn,
  TransactionTypeRow,
  TransationTypeBtn,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

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

        <TransactionTypeRow>
          <TransationTypeBtn value={'income'} variant="income">
            <ArrowCircleUp size={24} />
            Income
          </TransationTypeBtn>
          <TransationTypeBtn value={'outcome'} variant="outcome">
            <ArrowCircleDown size={24} />
            Outcome
          </TransationTypeBtn>
        </TransactionTypeRow>

        <button type="submit"> Register </button>
      </Form>
    </Content>
  </Dialog.Portal>
)
