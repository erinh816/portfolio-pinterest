import React from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
//IconButton is the bubble effect when hover over it
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <wrapper>
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
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}
          <form>
            <input type="text" />
            <button type="submit"></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      {/* <IconsWrapper></IconsWrapper> */}
    </wrapper>
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
  flex: 1;
  display: flex;
`;
// flex:1 takes all of the space it gets, search bar will stretch

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;
`;
