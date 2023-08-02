import { useEffect } from "react";

export default function ResponsiveStyle (applyResponsiveStyles) {

        useEffect(() => {
    
            applyResponsiveStyles();
          
            const handleResize = () => {
              applyResponsiveStyles();
            };
            
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, [applyResponsiveStyles]);
    
}