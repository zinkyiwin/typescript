type GreetProps ={
   count:number
   isLoggedIn:boolean
}
export const Greet =(props:GreetProps) => {
    return(
        <div>
            {props.isLoggedIn ? <h1>Hello React-Typescript!You have {props.count} unread message.</h1> : <h1>Welcome Guest!!</h1>}
            
        </div>
    )
}