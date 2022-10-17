import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { SearchData } from "../../dummydata";
import "./share.css";

function UploadimageDialog(data) {
  const [upload, setUpload] = useState(false);
  const [fileUpload, SetfileUpload] = useState("");
  const [friendlist, setFriendList] = useState([]);
  const fileChange = (event) => {
    SetfileUpload(event.target.files);
  };
  useEffect(() => {
    const loadfriendlist = () => {
      setFriendList(SearchData);
    };
    loadfriendlist();
   
    if(data.open){
  
      setUpload(true);
  }
  }, []);

  const handleCancel = ()=>{
    setUpload(false);
    console.log(upload);
  }
  
  return (
    <Dialog open={upload} onClose={!upload}>
      <DialogContent>
        <DialogContentText>
          <label>Select Files</label>
          <input
            type="file"
            onChange={(event) => {
              fileChange(event);
            }}
          />
          {/* {friendlist && friendlist.map((friend) => { */}

          <div>
            <div> <Typography>Tag Your Friends</Typography></div>
           
            <FormControlLabel
              control={
                <Checkbox
                  //   onChange={handleChange}
                
                  color="primary"
                />
              }
              label="SamanthKumar"
            />
             <FormControlLabel
              control={
                <Checkbox
                  //   onChange={handleChange}
                  
                  color="primary"
                />
              }
              label="Subhasmita sahoo"
            /> <FormControlLabel
            control={
              <Checkbox
                //   onChange={handleChange}
                
                color="primary"
              />
            }
            label="Chinmayee dash"
          /> <FormControlLabel
          control={
            <Checkbox
              //   onChange={handleChange}
              
              color="primary"
            />
          }
          label="Kirti sahoo"
        /> <FormControlLabel
        control={
          <Checkbox
            //   onChange={handleChange}
            
            color="primary"
          />
        }
        label="Shree Arodhya"
      />
          </div>

          {/* })} */}
          <div>
            <button class>Add more...</button>
            <Button  onClick={handleCancel}

            variant = "contained"
            color = "success"
            size = "small"
            // component = {RouterLink} 
            // to = "/home"
            className="shareButton">Share</Button>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default UploadimageDialog;
