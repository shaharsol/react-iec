import { useEffect } from "react"

export default function setTitle(title: string): void {
    useEffect(() => {
        document.title = title
    }, [])
}