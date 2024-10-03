import { createContext, useContext, useEffect, useState } from "react";

import auth from '@react-native-firebase/auth'


interface AuthContextType{
    user: any;
    loading: boolean;
}


const AuthContext= createContext<AuthContextType |undefined>(undefined);



export const AuthProvider : React.FC <{children : React.ReactNode}>=({children})=>{

    const [user,setuser]=useState<any>(null);

    const[loading,setloading]=useState(true);

    useEffect(()=>{
        const unsubscribe=auth().onAuthStateChanged((user)=>{
            setuser(user)
            setloading(false);
        });

        return unsubscribe;
    },[])

    return(
        <AuthContext.Provider value={{user,loading}} >
            {children}
        </AuthContext.Provider>
    )


}

export const useAuth=()=>{
    const context =useContext(AuthContext);
    if(context===undefined){
        throw new Error('Useauth Must used wiht in Auth provider')

    }
    return context
}




