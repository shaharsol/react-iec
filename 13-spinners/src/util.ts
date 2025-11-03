import { useEffect } from "react"

export function setTitle(title: string): void {
    useEffect(() => {
        document.title = 'profile'
    }, [])
}