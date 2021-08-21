import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardStyle from "../css/userCard.css"

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
      margin:10
    },
    media: {
      minHeight: 250,
      minWidth:250,
      paddingTop: '100%', // 16:9
      
    },
    
  }));
const UserCard = ({userDetail}) => {
    const classes = useStyles();
 
    return ( 
            <div>
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={userDetail.avatar}
                title="Paella dish"
                />
                <CardContent>
                    <div className="cardTitle">
                        {userDetail.first_name}
                    </div>
                    <div className="cardSubtitle">
                        {userDetail.email}
                    </div>
                </CardContent>
            </Card>

            </div>
            
     );
}
 
export default UserCard;