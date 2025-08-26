import React from "react";
import { SearchBar, UserInfoData, UserChartData } from "../components/index";
import { GithubContext } from "../context/globalContext";
import loadingImage from "../images/preloader.gif";

const Home = () => {
  const { loading } = React.useContext(GithubContext);

  if (loading) {
    return (
      <>
        <SearchBar />
        <img src={loadingImage} alt="" className="img-loading" />
      </>
    );
  }

  return (
    <>
      <SearchBar />
      <UserInfoData />
      <UserChartData />
    </>
  );
};

export default Home;
