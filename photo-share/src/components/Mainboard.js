import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard(props) {
  let { pinsss } = props;

  //urls down will pass into Pin.js as props
  return (
    <Wrapper>
      <Container>
        {pinsss.map((pin, index) => {
          let { urls } = pin;

          //why does it have to have a return in here to show the pins?
          return <Pin key={index} urls2={urls} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 15px;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
`;
