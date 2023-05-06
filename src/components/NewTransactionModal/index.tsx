import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import {
  Overlay,
  Content,
  Form,
  CloseBtn,
  TransactionTypeRow,
  TransationTypeBtn,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string().min(3),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
})

type NewTranscationFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<NewTranscationFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const isSubmitting = true

  const handleCreateNewTransaction = async (data: NewTranscationFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('data', data) //eslint-disable-line 
  }

  return (
    <Dialog.Portal>
      <Overlay data-submiting={isSubmitting ? 'true' : 'false'} />

      <Content
        onEscapeKeyDown={(event) => isSubmitting && event.preventDefault()}
        onPointerDownOutside={(event) => isSubmitting && event.preventDefault()}
      >
        <CloseBtn
          disabled={isSubmitting}
          data-submiting={isSubmitting ? 'true' : 'false'}
        >
          <X size={24} />
        </CloseBtn>
        <Dialog.Title>New transaction</Dialog.Title>

        <Form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            {...register('description', { disabled: isSubmitting })}
          />
          <input
            type="number"
            placeholder="Price"
            {...register('price', {
              valueAsNumber: true,
              disabled: isSubmitting,
            })}
          />
          <input
            type="text"
            placeholder="Category"
            {...register('category', { disabled: isSubmitting })}
          />

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

          <button
            type="submit"
            disabled={isSubmitting}
            data-submiting={isSubmitting ? 'true' : 'false'}
          >
            Register
          </button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
