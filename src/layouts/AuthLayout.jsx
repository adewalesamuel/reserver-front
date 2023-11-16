import { useEffect } from "react"
import { Utils } from "../utils"
import { useNavigate } from "react-router-dom"

export function AuthLayout(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (Utils.Auth.isLoggedIn()) navigate('/app');
    }, [])

    if (Utils.Auth.isLoggedIn()) return null;
    return (
        <>{props.children}</>
    )
}