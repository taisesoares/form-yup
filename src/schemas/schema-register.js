import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().min(2, 'Minimo 2 caracteres').required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório')
})

export default schema