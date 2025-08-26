import React from "react";
import { MdLocationCity, MdLocationOn, MdLink } from "react-icons/md";
import styled from "styled-components";
import { GithubContext } from "../../context/globalContext";

const UserInfoDataItem2 = () => {
  const { githubUserInfo } = React.useContext(GithubContext);

  const {
    name,
    avatar_url,
    twitter_username,
    html_url,
    bio,
    company,
    location,
    blog,
  } = githubUserInfo;

  let checkURL = blog.includes("http://") || blog.includes("https://");

  return (
    <Wrapper className="user-info-data-2-1">
      <header>User</header>
      <div className="user-info-data-2-1-1">
        <img src={avatar_url} alt={name} className="img-fit" />
        <div className="info">
          <h4>{name}</h4>
          <p>
            Twitter:
            <span className="twitter_username">
              @{twitter_username || "Unknown"}
            </span>
          </p>
        </div>
        <a href={html_url} target="blank">
          Follow
        </a>
      </div>
      <p className="user-info-data-2-1-2">{bio}</p>
      <div className="user-info-data-2-1-3">
        <p>
          <MdLocationCity />
          <span className="title">Company:</span>
          <span className="value">{company || "Unknown"}</span>
        </p>
        <p>
          <MdLocationOn />
          <span className="title">Location:</span>
          <span className="value">{location || "Unknown"}</span>
        </p>
        <p>
          <MdLink />
          <span className="title">Website:</span>
          <span className="value">
            {checkURL ? (
              <a href={blog ? blog : undefined} target="blank">
                {blog || "Unknown"}
              </a>
            ) : (
              <a href={blog ? `//${blog}` : undefined} target="blank">
                {blog || "Unknown"}
              </a>
            )}
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem 2rem;

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

  .user-info-data-2-1-1 {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 2rem;
  }
  .user-info-data-2-1-1 img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
  }
  .user-info-data-2-1-1 .info h4 {
    letter-spacing: 1px;
  }
  .twitter_username {
    color: #a18d98;
  }
  .user-info-data-2-1-1 a {
    padding: 5px 15px;
    color: #60aec0;
    font-size: 20px;
    letter-spacing: 1px;
    border: 1px solid #60aec0;
    border-radius: 25px;
    text-decoration: none;
    transition: 0.3s;
  }
  .user-info-data-2-1-1 a:hover {
    color: #fff;
    background: #2caeba;
  }
  .user-info-data-2-1-2 {
    margin: 1rem 0rem;
  }
  .user-info-data-2-1-3 svg {
    position: relative;
    top: 5px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .user-info-data-2-1-3 p a {
    color: teal;
    text-decoration: none;
  }
  .user-info-data-2-1-3 .title {
    margin-right: 5px;
  }
  .user-info-data-2-1-3 .value {
    font-family: "Cardo-Bold";
  }
  .twitter_username {
    margin-left: 5px;
  }
  @media (max-width: 500px) {
    padding: 1rem;
    margin-bottom: 5rem;
    .user-info-data-2-1-1 {
      grid-template-columns: 1fr;
      gap: 1rem;
      position: relative;
    }
    .user-info-data-2-1-1 img {
      justify-self: center;
      width: 105px;
      height: 105px;
      border-radius: 50%;
    }
    .user-info-data-2-1-1 a {
      position: absolute;
      right: 0;
      bottom: 2px;
      font-size: 18px;
    }
  }
  @media (max-width: 400px) {
    font-size: 4vw;
    .user-info-data-2-1-1 a {
      font-size: 5vw;
    }
  }
`;

export default UserInfoDataItem2;
