import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuthContext from '../hooks/useAuthContext'

const ViewError = ({ sms }) => {
  return (
    <p className='text-danger m-0'>{sms}</p>
  )
}

const Login = () => {
  const { loginAuth } = useAuthContext()
  const [error, setError] = useState('')

  const defaultValues = {
    username: 'kminchelle',
    password: '0lelplR'
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError('')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [error])

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Campo obligatorio').trim(),
    password: Yup.string().required('Campo obligatorio').trim()
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues
  })

  const handleLogin = async ({ username, password }) => {
    try {
      await loginAuth(username, password)
    } catch (error) {
      setError(error.response.data.message)
      reset()
    }
  }

  return (
    <form
      style={{
        margin: '5rem auto',
        width: '400px',
        display: 'grid',
        gap: '2rem',
        padding: '2rem'
      }}
      onSubmit={handleSubmit(handleLogin)}
      className='border border-primary rounded'
    >
      <div className='text-center'>
        <h3 className='m-0'>Login</h3>
        {error && <ViewError sms={error} />}
      </div>
      <div>
        <input
          className='form-control'
          type='text'
          placeholder='Username'
          {...register('username')}
        />
        {errors.username && <ViewError sms={errors.username?.message} />}
      </div>
      <div>
        <input
          className='form-control'
          type='password'
          placeholder='Password'
          {...register('password')}
        />
        {errors.password && <ViewError sms={errors.password?.message} />}
      </div>
      <button className='w-100 btn btn-primary' type='submit'>
        {isSubmitting
          ? <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
          : 'Login'}
      </button>
    </form>
  )
}
export default Login
