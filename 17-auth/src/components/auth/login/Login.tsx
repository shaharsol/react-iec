import { useForm } from 'react-hook-form'
import type LoginModel from '../../../models/Login'
import './Login.css'
import authService from '../../../services/auth'

export default function Login() {

    const { register, handleSubmit } = useForm<LoginModel>()

    async function login(login: LoginModel) {
        try {
            const { jwt } = await authService.login(login)
            alert(jwt)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(login)}>
                <input placeholder="username" {...register('username')}/>
                <input placeholder="password" type="password" {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    )
}