import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import useAuthContext from '../hooks/useAuthContext'

const Login = () => {
  const { loginAuth } = useAuthContext()

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Campo obligatorio').trim(),
    password: Yup.string().required('Campo obligatorio').trim()
  })

  const defaultValues = {
    username: 'kminchelle',
    password: '0lelplR'
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues
  })

  const handleLogin = async ({ username, password }) => {
    try {
      await loginAuth(username, password)
    } catch (error) {
      reset()
      console.error(error)
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
      <div>
        <h3 className='m-0 text-center'>Login</h3>
      </div>
      <div>
        <input
          className='form-control'
          type='text'
          placeholder='Username'
          {...register('username')}
        />
        <p className='text-danger m-0'>{errors.username?.message}</p>
      </div>
      <div>
        <input
          className='form-control'
          type='password'
          placeholder='Password'
          {...register('password')}
        />
        <p className='text-danger m-0'>{errors.password?.message}</p>
      </div>
      <button className='w-100 btn btn-primary' type='submit'>
        Login
      </button>
    </form>
  )
}
export default Login
