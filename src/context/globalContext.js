import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { mockUserInfo, mockFollowers, mockRepos } from "../mockData/index";

const GithubContext = React.createContext();

const GlobalContext = ({ children }) => {
  // Info
  const [githubUserInfo, setGithubUserInfo] = useState(mockUserInfo);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);
  // Error
  const [errorMsg, setErrorMsg] = useState({ status: false, msg: "test" });
  // Remaining Rate
  const [requests, setRequests] = useState(0);
  // Loading
  const [loading, setLoading] = useState(false);

  // Root URL
  const rootURL = "https://api.github.com";
  // Rate Limit
  const rateLimitURL = "https://api.github.com/rate_limit";

  // Fetch Data
  const fetchData = async (user) => {
    toggleError();
    setLoading(true);

    const response = await axios(`${rootURL}/users/${user}`)
      .then((res) => res)
      .catch((err) => {
        console.log(err)
      });

    if (response) { 
      const { followers_url, repos_url } = response.data;

      const followersData = await axios(`${followers_url}?per_page=100`)
        .then((res) => res)
        .catch((err) => console.log(err));

      const reposData1 = await axios(`${repos_url}?per_page=100&page=1`)
        .then((res) => res)
        .catch((err) => console.log(err));
      const reposData2 = await axios(`${repos_url}?per_page=100&page=2`)
        .then((res) => res)
        .catch((err) => console.log(err));
      const reposData3 = await axios(`${repos_url}?per_page=100&page=3`)
        .then((res) => res)
        .catch((err) => console.log(err));

      await Promise.allSettled([
        followersData,
        reposData1,
        reposData2,
        reposData3,
      ])
        .then((res) => {
          const [followers, reposData1, reposData2, reposData3] = res;
          if (
            followers.status === "fulfilled" &&
            reposData1.status === "fulfilled" &&
            reposData2.status === "fulfilled" &&
            reposData3.status === "fulfilled"
          ) {
            let totalRepos = { reposData1, reposData2, reposData3 };
            totalRepos = Object.values(totalRepos).map((item) => {
              return item.value.data;
            });
            let [repos1, repos2, repos3] = totalRepos;
            let mergeRepos = [].concat(repos1, repos2, repos3);

            setGithubUserInfo(response.data);
            setRepos(mergeRepos);
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      toggleError(true, "There Is No User With That Username");
    }
    checkRequests();
    setLoading(false);
  };

  const checkRequests = useCallback(async () => {
    axios(rateLimitURL)
      .then((res) => {
        const { rate } = res.data;
        setRequests(rate.remaining);
        if (rate.remaining === 0) {
          toggleError(true, "Sorry, you have exceeded your hourly rate limit");
        }
      })
      .catch((err) => console.log(err));
  },[]);

  // Set Error
  const toggleError = (status, msg) => {
    setErrorMsg({ status: status, msg: msg });
  };

  useEffect(() => {
    checkRequests();
  }, [checkRequests]);

  return (
    <GithubContext.Provider
      value={{
        githubUserInfo,
        followers,
        repos,
        errorMsg,
        loading,
        requests,
        fetchData,
        setErrorMsg,
        toggleError,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GlobalContext };
