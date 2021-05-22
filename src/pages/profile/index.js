import React, { useState, useEffect } from 'react'
import UserProfile from '../../components/UserProfile';
import TabsProfile from '../../components/TabsProfile';

import { db } from '../../firebase/firebase'
import useAuth from '../../firebase/firebaseAuth'

function Profile() {
    const { pending, isSignedIn, user } = useAuth()
    const [currentUser, setCurrentUser] = useState({})
   
    useEffect(() => {
      if (!pending & isSignedIn) {
        const unsubscribe = db
          .collection('users')
          .doc('CZMk95xeqPbiFBSiwcDt1nGq2Hs2')
          .onSnapshot(doc => {
            setCurrentUser(doc.data())
          })
        return () => {
            unsubscribe()
        }
      } 
    }, [pending, isSignedIn, user])
    
    console.log(currentUser)
    return(
        <div>
            <UserProfile user={currentUser} />
            <TabsProfile  />
        </div>
    )
}

export default Profile;