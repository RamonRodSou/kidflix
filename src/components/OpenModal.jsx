import React from "react";


export default function OpenModalDynamic ({tag: Tag, estilo ,children, edit, onOpen} ) {

return (
    <Tag
        style={estilo}
        onClick={() => [edit({}), onOpen()]}>
        {children}
    </Tag>

)

}
