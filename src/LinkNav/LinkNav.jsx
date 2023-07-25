import { Link } from "react-router-dom";


export default function LinkNav ({children, to, color, style}){
    
    return (

        <Link
            key={children}
            style={style} 
            to={to}>
            {children}
        </Link>

    )
}