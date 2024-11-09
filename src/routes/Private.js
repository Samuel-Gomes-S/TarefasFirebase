import React, { useEffect, useState } from "react"
import { auth } from "../firebaseConnections"
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from "react-router-dom"


export default function Private({ children }) {

    const [signed, setSigned] = useState(false)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        function loadUserLocal() {
            const unsub = onAuthStateChanged(auth, (user) => {
                if (user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName
                    }
                    localStorage.setItem('@user', JSON.stringify(userData))
                    setloading(false)
                    setSigned(true)
                } else {
                    setSigned(false)
                    setloading(false)
                }
            })
            return () => unsub()    
        }
        loadUserLocal()
        
    }, [])

    if (loading) {
        return <div></div>
    }
    if (!signed) {
        return <Navigate to={'/'} />
    }

    return children
}