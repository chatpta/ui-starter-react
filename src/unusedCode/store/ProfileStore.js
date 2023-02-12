import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from "react-redux";


export const UserProfile = createContext( {} );

export const UserProfileProvider = ( { children } ) => {

    const user = useSelector( state => state?.user );
    const [ profile, setProfile ] = useState( { name: "", email: "", phone: "", password: "" } );

    useEffect( () => {

        return () => {
            setProfile( {} );
        };
    }, [ setProfile ] );


    return (
        <UserProfile.Provider value={ [ profile, setProfile ] }>
            { children }
        </UserProfile.Provider>
    )

}

export const useUserProfile = () => {
    return useContext( UserProfile );
}