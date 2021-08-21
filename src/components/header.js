import React from "react";
import HeaderStyle from "../css/header.css"
import GlobalStyle from "../css/global.css"
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const Header = () => {
    return ( 
        <div >
             <Paper className="header" square >
                <Typography className="headerTitle">
                    <span className="primary p-2">LOGO</span>
                </Typography>
             </Paper>
            
        </div>
     );
}
 
export default Header;