import React, { useState } from "react";
//import axios from 'axios'
import styled from "styled-components";
import { gql } from '@apollo/client';

import client from '../../Apollo'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #282c34;
  color: white;
  font-size: 1.3rem;

  > div {
    display: flex;
    margin: 0.2rem 1rem;
  }
`;

const HeaderItem = styled.div`
  margin: 1rem;
  &:hover {
    color: #61dafb;
  }
  > svg {
    height: 2rem;
    color: #61dafb;
  }
`;

function Header() {
  
  async function getData() {
    try {
      const {data} = await client.query({
        query: gql`
          query GetBooks {
            books{
              title
            }
          }
        `
      })
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <Container>
      <div>
        <HeaderItem onClick={() => getData()}>Discover</HeaderItem>
        <HeaderItem>Browse</HeaderItem>
        <HeaderItem>...</HeaderItem>
      </div>

      <SearchBar />

      <div>
        <HeaderItem>
          <svg version="1.1" viewBox="0 0 20 20" x="0px" y="0px" ><g>
            <path 
            d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 
            5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z">
            </path></g>
          </svg></HeaderItem>
        <HeaderItem>Notify icon</HeaderItem>
        <HeaderItem>Get Bits</HeaderItem>
        <HeaderItem>Account Pic</HeaderItem>
      </div>
    </Container>
  );
}

function SearchBar() {
  const [text, handleText] = useState("");

  return (
    <SearchBarContainer>
      <input type="txt" onChange={(e) => handleText(e.target.value)} />
      <span onClick={() => console.log(text)}>Q</span>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 30vw;

  input {
    width: 100%;
    border-radius: 8px;
  }
`;

export default Header;
