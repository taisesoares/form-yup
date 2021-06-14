import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import schemaRegister from '../schemas/schema-register'

import Form from './Form'
import Title from './Title'
import Fields from './Fields'
import Errors from './Errors'



const ContainerForm = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schemaRegister)
  })

  const newUser = (user) => { 
    console.log(user)
  }

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Title>Registre-se</Title>
      <Fields.Text type="text" name="name" placeholder="Nome" register={register} />
      <Errors>{errors.name?.message}</Errors>
      <Fields.Text type="email" name="email" placeholder="E-mail" register={register} />
      <Errors>{errors.email?.message}</Errors>
      <Fields.Bottom value="Cadastrar" />
    </Form>
  )
}

export default ContainerForm