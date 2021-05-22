import { useState, useEffect } from 'react'
import firebase, { auth } from './firebase'

export default function useAuth() {
    const initialState = {
        isSignedIn: false,
        pending: true,
        user: null
    }
    const [authState, setAuthState] = useState(initialState)

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user =>
          setAuthState({ user, pending: false, isSignedIn: !!user })
        )
        return () => unregisterAuthObserver()
    }, [])

    return { auth, ...authState }
}
