import { NavLink } from "react-router-dom";


export default function LinkNav ({children, to, color, style}){
    
    const activeStyle = {
        color: "green",
    };
    return (

        <NavLink
            key={children}
            style={style} 
            to={to}
            activeStyle={activeStyle}        >
            {children}
        </NavLink>

    )
}