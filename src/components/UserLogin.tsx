import { useState } from "react"

type UserProps = {
    name : string
    email :String
}

export const UserLogin =(props:UserProps) =>{
    const [users,setUsers] = useState<UserProps | null >(null)
    const handleLogIn =() => {
        setUsers({
            name:'Grace',
            email:'grace@gmail.com'
        })
    }

    const handleLogOut =() => {
        setUsers(null)
    }

    return(
        <div>
            <button onClick={handleLogIn} >Login</button>
            <button onClick={handleLogOut} >Log Out</button>
            <div>User name {users?.name}</div>
            <div>User email {users?.email}</div>
        </div>
    )
}