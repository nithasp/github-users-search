import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../../context/globalContext";

// Charts
import LanguagesChart from "./LanguagesChart";
import MostPopularReposChart from "./MostPopularReposChart";
import MostStarsChart from "./MostStarsChart";
import MostForksChart from "./MostForksChart";

const UserChartData = () => {
  const { repos } = useContext(GithubContext);

  // Top 5 Language
  let languagesDataTotal = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (language) {
      if (total[language]) {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
          stars: total[language].stars + stargazers_count,
        };
      } else {
        total[language] = {
          label: language,
          value: 1,
          stars: stargazers_count,
        };
      }
    }
    return total;
  }, {});
  languagesDataTotal = Object.values(languagesDataTotal)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // Top 5 Stars
  let mostStarsData = Object.values(languagesDataTotal)
    .sort((a, b) => {
      return b.stars - a.stars;
    }).filter((item)=> item.stars > 0)
    .map((item) => {
      return { label: item.label, value: item.stars };
    })
    .slice(0, 5);

  // Top 5 Repos
  let mostPopularRepos = repos
    .map((repo, index) => {
      return { label: repo.name, value: repo.stargazers_count };
    })
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // Top 5 Forks
  let mostForksData = repos.reduce((total, item) => {
    const { name, forks } = item;
    total[name] = { label: name, value: forks };
    return total;
  }, {});
  mostForksData = Object.values(mostForksData)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);


  return (
    <section id="user-graph-data">
      <Wrapper className="inner">
        <div className="wrap-language">
          <LanguagesChart data={languagesDataTotal} />
        </div>
        <div className="wrap-repos">
          <MostPopularReposChart data={mostPopularRepos} />
        </div>
        <div className="wrap-stars">
          <MostStarsChart data={mostStarsData} />
        </div>
        <div className="wrap-forks">
          <MostForksChart data={mostForksData} />
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 2rem;
  row-gap: 2rem;

  text {
    font-family: "Cardo-Regular" !important;
    letter-spacing: 0.8px;
  }

  svg {
    width: 100% !important;
  }

  .wrap-language div:first-child,
  .wrap-repos div:first-child,
  .wrap-stars div:first-child,
  .wrap-forks div:first-child {
    height: 400px !important;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    /* Caption Fonts */
    g[class*="-caption"] text,
    g[class*="dataset-axis-name"] text {
      font-size: 5vw !important;
    }
    /* Label Fonts */
    g[class*="-labels"] text {
      font-size: 3.5vw !important;
    }
    .wrap-language div:first-child,
    .wrap-stars div:first-child {
      height: 60vw !important;
    }
  }
`;
export default UserChartData;
