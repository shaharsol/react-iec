import { createContext, useState, type PropsWithChildren } from 'react'
import './Auth.css'
import type AuthContextInterface from './AuthContext'

export const AuthContext = createContext<AuthContextInterface | null>(null)

export default function Auth(props: PropsWithChildren) {

    const JWT_KEY_NAME = 'jwt'

    const [ jwt, setJwt ] = useState<string>(localStorage.getItem(JWT_KEY_NAME) || '')

    function newLogin(jwt: string) {
        localStorage.setItem(JWT_KEY_NAME, jwt)
        setJwt(jwt)
    }

    function logout() {
        localStorage.removeItem(JWT_KEY_NAME)
        setJwt('')
    }

    return (
        <AuthContext.Provider value={ { jwt, newLogin, logout } }>
            {props.children}
        </AuthContext.Provider>
    )
}