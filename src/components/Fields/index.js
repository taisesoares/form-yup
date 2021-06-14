import React from 'react'
import Button from './Button'

import Input from './Input'

const Text = ({ placeholder, type, name, value, register }) => {
  return (
    <Input placeholder={placeholder} type={type} name={name} value={value} {...register(name)} />
  )
}

const Bottom = ({ value }) => {
  return (
    <Button>{value}</Button>
  )
}

const Field = {
  Text,
  Bottom
}

export default Field