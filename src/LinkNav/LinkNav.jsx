import { Link } from "react-router-dom";


export default function LinkNav ({children, to, color}){

    const textColor = color ? color : 'white';
    const shadowColor = color ? color : 'black';

    const style = {
        color: textColor,
        textDecoration: "inherit",
        textShadow: "2px 3px 5px shadowColor",
        textAlign: "center"
      };
      
    return (

        <Link
            key={children}
            style={style} 
            to={to}>
            {children}
        </Link>

    )
}