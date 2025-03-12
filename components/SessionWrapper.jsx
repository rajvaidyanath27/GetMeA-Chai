import {SessionProvider} from "next-auth-react"

export default function SessionWrapper ({children}){
    <SessionProvider>
       {children}
    </SessionProvider>
}
