import React from "react";
// import UploadimageDialog from "../../components/share/Dialog";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useState } from "react";
import { Button } from "@mui/material";

// import Dialog from "@mui/material/Dialog";

import UploadimageDialog from "./Dialog";

export default function Share() {
  const [onupload, setOnupload] = useState(false);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <Button onClick={()=>setOnupload(true)} className="shareOptionText">
                Photo or Video
              </Button>
              {onupload ? <UploadimageDialog  
              open={true}
              />:null}
              
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
