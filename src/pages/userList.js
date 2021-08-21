import React,{useEffect,useState} from "react";
import Header from "../components/header"
import UserCard from "../components/userCard"
import GlobalStyle from "../css/global.css"
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>({
    root: {
        '& .Mui-selected': {
          backgroundColor: 'white',
          color:'#0494FD',
          border:"1px solid #0494FD !important"
         },
         "& .Mui-disabled": {
            backgroundColor:"#919EAB",
            color:"#C4CDD5"
          },
          "& .MuiPaginationItem-icon": {
            color: "#C4CDD5"
          },
          "& .MuiPaginationItem-outlined":{
              border: "1px solid #DFE3E8",
          }
    }}),
  );

const UserList = () => {
    const [pagination, setpagination] = useState(1);
    const [userList, setuserList] = useState([]);
    const totalPagination = React.useRef(0)
    useEffect(() => {
        fetch("https://reqres.in/api/users?page="+pagination)
      .then(res => res.json())
      .then(
        (result) => {
            // console.log(result.data)
            let usersData = result.data;
            totalPagination.current = result.total_pages;
            setuserList(usersData)
        },
        (error) => {
          alert(error)
        }
      )
    }, [pagination]);

    const handlePagination = (event, value) => {
        setpagination(value);
      };
      const classes = useStyles();
    return ( 
        
        <div>
            <Header></Header>
            <div className="container">
            <div className="flex-container">
            {userList.map(userdata=>{
               
                return (

                    <UserCard userDetail={userdata} key={userdata.id}></UserCard>
                )
            })}
            </div>
            </div>

            <div className="d-flex justify-content-center mt-4 mb-4">
            <Pagination className={classes.root} count={totalPagination.current} variant="outlined" shape="rounded" onChange={handlePagination} />
            </div>
        </div>
     );
}
 
export default UserList;