import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

import Button from 'components/Button'
import HelpText from 'components/HelpText'
import TextArea from 'components/TextArea'
import TextField from 'components/TextField'

const ContactAgentForm = () => {
  const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.number().typeError('phoneNumber is a required field and must be only numbers').required(),
    comments: Yup.string().required()
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: { fullName: '', email: '', phoneNumber: '', comments: '' }
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log('Message sent successfully! - ', data)
    toast('Message sent successfully!')
  }

  return (
    <div className='bg-lightGrey border-grey border p-3'>
      <p className='text-3xl m-5 text-center'>Contact Agent</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => {
              return <TextField
                className='mb-0'
                id='fullName'
                name='fullName'
                placeHolder='Full Name *'
                {...field}
              />
            }}
          />
          {errors?.fullName && <HelpText>{errors?.fullName.message}</HelpText>}

          <Controller
            control={control}
            defaultValue=''
            name='email'
            render={({ field }) => {
              return <TextField
                className='mb-0 mt-5'
                id='email'
                name='email'
                placeHolder='Email *'
                {...field}
              />
            }}
          />
          {errors?.email && <HelpText>{errors?.email.message}</HelpText>}

          <Controller
            control={control}
            defaultValue=''
            name='phoneNumber'
            render={({ field }) => {
              return <TextField
                className='mb-0 mt-5'
                id='phoneNumber'
                name='phoneNumber'
                placeHolder='Phone Number *'
                {...field}
              />
            }}
          />
          {errors?.phoneNumber && <HelpText>{errors?.phoneNumber.message}</HelpText>}

          <Controller
            control={control}
            defaultValue=''
            name='comments'
            render={({ field }) => {
              return <TextArea
                className='mt-5 mb-0'
                id='comments'
                name='comments'
                placeHolder='Comments *'
                rows={5}
                {...field}
              />
            }}
          />
          {errors?.comments && <HelpText>{errors?.comments.message}</HelpText>}

          <div className='text-center'>
            <Button id='submitContactAgent' type='submit' variant='primary' className='w-56 h-16 mt-5 text-xl'>Contact Now</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactAgentForm
