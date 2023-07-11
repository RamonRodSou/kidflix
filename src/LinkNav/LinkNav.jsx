import { Link } from "react-router-dom";


export default function LinkNav ({children, to}){

    return (

        <Link 
            style={{ color: "#ffffff",
                     textDecoration: "inherit", 
                     textShadow: "2px 3px 5px black", 
                     textAlign: "center"}} 
            to={to}>
            {children}
        </Link>

    )
}