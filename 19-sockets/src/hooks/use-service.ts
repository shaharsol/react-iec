import { useContext } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import type AuthAware from "../services/auth-aware/AuthAware";

export default function useService<T extends AuthAware>(Service: {new(jwt: string): T}): T {
    const { jwt } = useContext(AuthContext)!

    const service = new Service(jwt)

    return service
}