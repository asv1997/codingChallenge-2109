import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const LinksContainer = styled.div`
  padding: 20px 20px;
  border: 0.5px solid lightblue;
`

const Home = () => {
    return (
        <Wrapper>
            <LinksContainer>
                <div>
                    <div><Link to={"/Q1"}> Question 1 (React Grid Layout)</Link></div>
                    <div><Link to={"/Q2"}>Question 2 (Dropdown component)</Link></div>
                </div>
            </LinksContainer>
        </Wrapper>
    )
}

export default Home;