import React from "react";
import styled from "styled-components";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoGist } from "react-icons/go";
import { GithubContext } from "../../context/globalContext";

const UserInfoDataItem1 = () => {

  const { githubUserInfo } = React.useContext(GithubContext);

  const items = [
    {
      id: 1,
      title: "Repos",
      number: githubUserInfo.public_repos,
      icon: <RiGitRepositoryLine className="github-icon" />,
    },
    {
      id: 2,
      title: "Followers",
      number: githubUserInfo.followers,
      icon: <FiUsers className="github-icon" />,
    },
    {
      id: 3,
      title: "Following",
      number: githubUserInfo.following,
      icon: <FiUserPlus className="github-icon" />,
    },
    {
      id: 4,
      title: "Gists",
      number: githubUserInfo.public_gists,
      icon: <GoGist className="github-icon" />,
    },
  ];

  const RenderItem = () => {
    return items.map((item, index) => {
      return (
        <Item key={index}>
          <div className="icon">
            {item.icon}
          </div>
          <div>
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        </Item>
      );
    });
  };

  return (
    <>
      <RenderItem />
    </>
  );
};

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  background: #fff;
  padding: 20px 0px;

  h3 {
    font-size: 30px;
    line-height: 1;
  }
  p {
    font-size: 20px;
    color: #747d98;
  }
  .github-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: tan;
    padding: 12px;
    height: 54px;
    width: 54px;
    border-radius: 50%;
    overflow: initial;
  }
  &:nth-of-type(1) svg {
    color: rgb(218, 74, 145);
    background: #ffe0f0;
  }
  &:nth-of-type(2) svg {
    color: #2caeba;
    background: #e0fcff;
  }
  &:nth-of-type(3) svg {
    color: #5d55fa;
    background: #e6e6ff;
  }
  &:nth-of-type(4) svg {
    color: #f0b429;
    background: #fffbea;
  }

  .icon {
    position: relative;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 17px;
    }
  }
  @media (max-width: 500px) {
    padding: 20px 10px 20px 0;
    h3 {
      font-size: 5vw;
    }
    p {
      font-size: 4vw;
    }
    .github-icon {
      padding: 10px;
      height: 10vw;
      width: 10vw;
    }
  }
`;

export default UserInfoDataItem1;
