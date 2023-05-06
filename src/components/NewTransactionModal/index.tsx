import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
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
  type: z.enum(['income', 'outcome']),
})

type NewTranscationFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<NewTranscationFormInputs>({
    defaultValues: {
      category: '',
      description: '',
      price: undefined,
      type: undefined,
    },
    resolver: zodResolver(newTransactionFormSchema),
  })

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
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeRow
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransationTypeBtn
                    value={'income'}
                    variant="income"
                    disabled={isSubmitting}
                    data-submiting={isSubmitting ? 'true' : 'false'}
                  >
                    <ArrowCircleUp size={24} />
                    Income
                  </TransationTypeBtn>

                  <TransationTypeBtn
                    value={'outcome'}
                    variant="outcome"
                    disabled={isSubmitting}
                    data-submiting={isSubmitting ? 'true' : 'false'}
                  >
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransationTypeBtn>
                </TransactionTypeRow>
              )
            }}
          />

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
