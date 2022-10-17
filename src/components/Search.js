import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { SearchData } from "../dummydata";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../components/Topbar/topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

function SearchComponent() {
  const [search, setSearch] = useState([]);
  const [searchMatch, setSearchMatch] = useState([]);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    const loadSearch = () => {
      setSearch(SearchData);
    };
    loadSearch();
  }, []);

  const requestHandler = () => {
    console.log("requestHandler");
    setIsRequested(true);
    console.log("requestHandler", isRequested);
  };
  const searchFriends = (text) => {
    let matches = search.filter((matched) => {
      console.log("matched", matched);
      const regex = new RegExp(`${text}`, "gi");
      return (
        matched.username.match(regex) ||
        matched.contactNo.match(regex) ||
        matched.email.match(regex)
      );
    });
    setSearchMatch(matches);
  };
  return (
    <div>
      <div className="searchbar">
        <Search className="searchIcon" />

        <input
          className="searchInput"
          style={{ width: "40%" }}
          placeholder="Enter Email or contactNo"
          onChange={(e) => searchFriends(e.target.value)}
        />
        {searchMatch &&
          searchMatch.map((item, index) => (
            <div
              key={index}
              //   style={{ marginLeft: "35%", marginTop: "5px" }}
            >
              <Card style={{ width: "65%" }}>{item.username}</Card>

              {item.isFriend === false && !isRequested  === true ? (
                <button
                onClick={requestHandler}
                  // component={RouterLink}
                  // to="/register"
                  // variant="contained"
                  // color="success"
                  // size="small"
                  className="addButton"
                >
                  Add Friend
                </button>
              ) : (
                <button
                //   onClick={requestHandler}
                  // component={RouterLink}
                  // to="/register"
                  // variant="contained"
                  // color="success"
                  // size="small"
                  className="addButton"
                >
                  Friend
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchComponent;
