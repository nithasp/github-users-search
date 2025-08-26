import React, { useState } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/globalContext";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  
  const { fetchData, errorMsg, toggleError, requests, loading } = React.useContext(
    GithubContext
  );
  const [user, setUser] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(user) {
      fetchData(user);
    } else {
      toggleError(true,'Please Enter User')
    }
    
  };

  return (
    <Section id="search-bar">
      {errorMsg.status && (
        <Error className="inner">
          <p>{errorMsg.msg}</p>
        </Error>
      )}
      <Wrapper className="inner">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <AiOutlineSearch />
            <input
              type="text"
              value={user}
              placeholder="Enter Github User"
              // onKeyPress={(e) => {
              //   e.key === "Enter" && e.preventDefault();
              // }}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && loading === false && <button type="submit">Search</button>}
          </div>
        </form>
        <p className="request">Requests : {requests} / 60</p>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  margin: 2rem 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 4.3rem;
  align-items: center;

  div.form-group {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
    background: #fff;
    padding: 10px;
    width: 100%;
    height: 70px;
  }

  svg {
    position: relative;
    left: 10px;
    background: #fff;
    height: 100%;
    width: 20px;
  }

  input {
    width: 100%;
    font-size: 20px;
    padding: 10px;
    border: none;
    outline: none;
  }
  input::placeholder {
    font-family: "Cardo-Regular";
    color: #747d98;
    letter-spacing: 1px;
  }

  button {
    font-family: "NotoSerif-Regular";
    padding: 10px 15px;
    letter-spacing: 1px;
    border: none;
    border-radius: 4px;
    background: #2caeba;
    color: white;
    cursor: pointer;
    font-size: 20px;
    transition: 0.3s;
    outline: none;
  }
  button:hover {
    color: #000000;
    background: #88ebf2;
  }
  .request {
    position: relative;
    right: 25px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #617d98;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .request {
      top: 10px;
      right: 0;
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    div.form-group {
      column-gap: 1rem;
    }
    svg {
      width: 5vw;
      left: 5px;
    }
    input {
      font-size: 4vw;
    }
    button {
      font-size: 4vw;
      padding: 10px;
    }
    .request {
      font-size: 5vw;
    }
  }
`;

const Error = styled.div`
  p {
    font-size: 20px;
    color: red;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
`;

export default SearchBar;
