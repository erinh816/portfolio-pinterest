import React, { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
//IconButton is the bubble effect when hover over it
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//Header will receive props which is the function? which function?
function Header(props) {
  // hook, input is the value, setInput is the function to change it
  const [input, setInput] = useState("");
  //we want to make an API call with this input, and then we want those pins to be distrubuted to Mainboard as props

  const onSearchSubmit = (e) => {
    //prevent it to go to another page
    e.preventDefault();
    props.onSubmit(input);
    // console.log("this is the input", input);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>

      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;

  aligh-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  display: flex;
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomePageButton = styled.div`
  display: flex;

  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const FollowingButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

// <SearchWrapper> is the whole area, <SearchBarWrapper> is the grey capsule search area

const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
`;
// flex:1 takes all of the space it gets, search bar will stretch

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: inline-flex;

  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }

  input:active {
    outline: none;
  }

  input:hover {
    outline: none;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
`;
