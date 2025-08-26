import React from "react";
import { GithubContext } from "../../context/globalContext";
import styled from "styled-components";

import {LazyLoadImage} from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

import loadingIMG from '../../images/Spin-1s-200px.gif';

const UserInfoDataItem3 = () => {
  const { followers } = React.useContext(GithubContext);

  const RenderFollowers = () => {
    return followers.map((follower, index) => {
      const { login, avatar_url, html_url } = follower;
      return (
        <Person id="person" key={index}>
          <LazyLoadImage
            src={avatar_url}
            alt={login}
            className="img-fit person-item1"
            placeholderSrc={loadingIMG}
            effect="blur"
          />
          <div className="person-item2">
            <h3>{login}</h3>
            <a href={html_url} target="blank">
              {html_url}
            </a>
          </div>
        </Person>
      );
    });
  };

  if(followers.length === 0) {
    return (
    <Wrapper id="followers">
      <header>First 100 Followers</header>
      <div className="wrap-person">
        <p className="no-followers">No Followers</p>
      </div>
    </Wrapper>
    )
  }

  return (
    <Wrapper id="followers">
      <header>First 100 Followers</header>
      <div className="wrap-person">
        <RenderFollowers />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #fff;

  .wrap-person {
    position: relative;
    height: 300px;
    overflow-y: scroll;
    padding: 2rem;
  }

  header {
    position: absolute;
    top: -40px;
    left: 0;
    font-family: "Cardo-Bold";
    font-size: 20px;
    background: white;
    padding: 10px 20px;
    letter-spacing: 1px;
  }

  #person {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
  }
  #person img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .person-item2 a {
    color: teal;
  }
  .no-followers {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    letter-spacing: 1px;
  }

  .wrap-person::-webkit-scrollbar {
    height: 12px;
    width: 12px;
  }
  .wrap-person::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  .wrap-person::-webkit-scrollbar-track {
    background: #ffffff;
  }

  @media (max-width: 500px) {
    .wrap-person {
      height: 300px;
      overflow-y: scroll;
      padding: 1rem;
      font-size: 4vw;
    }
    .no-followers {
      font-size: 5vw;
    }
  }
`;

const Person = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin: 0;
  }

  .lazy-load-image-background.blur {
    filter: blur(0px);
    width: 45px;
    height: 45px;
  }
`;

export default UserInfoDataItem3;
