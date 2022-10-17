import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import "./online.css";
import { useEffect, useState,useParams } from "react";
import { Table, TableCell, TableRow, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export default function Online({ user }) {
  console.log("user",user);
 
  const [isRequested, setIsRequested] = useState(false);
  const requestHandler = ()=>{
    console.log("requestHandler")
    setIsRequested(true)
    console.log("requestHandler",isRequested)

    // console.log("user",user.isf)
  }
  // useEffect(()=>{
  //   setIsRequested(user.isFriend);
  // })

  return (
    
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />

        {/* <span className="rightbarOnline"></span> */}
      </div>
      <Typography
      component={RouterLink}
      to = {`/profile/${user.username}`}
      >{user.username}</Typography>
      {/* <span className="rightbarUsername">{user.username}</span> */}
      {/* {user.map((key)=>( */}
          <Table>
          <TableRow>
            <TableCell>
            { !isRequested===false? (
          <button
            // component={RouterLink}
            // to="/register"
            // variant="contained"
            // color="success"
            // size="small"
            className="addButton"
          >
            Requested
          </button>
        ) : (
          <button onClick={requestHandler}
            // component={RouterLink}
            // to="/register"
            // variant="contained"
            // color="success"
            // size="small"
            className="addButton"
          >
            Add Friend
          </button>
        )}
            </TableCell>
          </TableRow>
        </Table>
      {/* ))} */}
      

     
      

      
   
    </li>
  );
}
