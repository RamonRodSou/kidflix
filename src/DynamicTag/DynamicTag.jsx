import React from "react";


const DynamicTag = ({ tag: Tag, children, ...props }) => {
    return <Tag {...props}>{children}</Tag>;
  };
  
  export default DynamicTag;