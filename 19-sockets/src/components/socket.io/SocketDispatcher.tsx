import { createContext, useEffect, type PropsWithChildren } from "react"
import type SocketDispatcherContextInterface from "./SocketDispatcherContext"
import { io } from "socket.io-client"
import { useAppDispatcher } from "../../redux/hooks"
import { unfollow } from "../../redux/following-slice"

export const SocketDispatcherContext = createContext<SocketDispatcherContextInterface | null>(null)

export default function SocketDispatcher(props: PropsWithChildren) {

    const dispatch = useAppDispatcher()

    useEffect(() => {
        const socket = io('ws://localhost:3004')
        socket.onAny((eventName: string, payload: any) => {
            console.log(`event occured: ${eventName}`)
            console.log(payload)

            // this is the place to check if i need to dispatch
            // i need to see if the incoming message is even relevant to me
            // i need to see if the incoming message is from me
            if(eventName === 'new-unfollow') {
                dispatch(unfollow({id: payload.followee.id}))
            }
        })
    }, [])

    return (
        <SocketDispatcherContext value={ {} }>
            {props.children}
        </SocketDispatcherContext>
    )
}