import '../styles/login.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthContext } from '../context/AuthContext'
import Page from '../layout/Page'
import ViewError from '../components/common/ViewError'

const Login = () => {
  const { loginAuth } = useAuthContext()
  const [failed, setFailed] = useState('')

  const defaultValues = {
    username: 'kminchelle',
    password: '0lelplR'
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFailed('')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [failed])

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
      if (error.code === 'ERR_NETWORK') setFailed(error.message)
      if (error.code === 'ERR_BAD_REQUEST') setFailed(error.response.data.message)
      reset()
    }
  }

  return (
    <Page title='Login'>
      <section className='login'>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='login-form border border-primary rounded'
        >
          <div className='text-center'>
            <h3 className='m-0'>Countries API</h3>
            {failed && <ViewError sms={failed} />}
          </div>
          <div>
            <input
              className='form-control'
              type='text'
              placeholder='Username'
              autoComplete='off'
              autoFocus
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
      </section>
    </Page>
  )
}
export default Login
