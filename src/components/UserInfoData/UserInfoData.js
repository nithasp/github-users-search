import React from "react";
import styled from "styled-components";
import UserInfoDataItem1 from "./UserInfoDataItem1";
import UserInfoDataItem2 from "./UserInfoDataItem2";
import UserInfoDataItem3 from "./UserInfoDataItem3";


const UserInfoData = () => {
  return (
    <section id="user-info-data">
      <div className="inner">
        <WrapperItem1>
          <UserInfoDataItem1 />
        </WrapperItem1>
        <WrapperItem2>
          <UserInfoDataItem2 />
          <UserInfoDataItem3 />
        </WrapperItem2>
      </div>
    </section>
  );
};

const WrapperItem1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    gap: 1rem;
  }
`;

const WrapperItem2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  margin: 4.5rem 0 2rem 0;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
  @media (max-width: 500px) {
    display:block;
  }
`;

export default UserInfoData;
