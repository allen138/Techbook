import React, { Component } from "react";
import TopFiveProjects from "../components/TopFiveProjects";
import API from "../utils/API";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";

class SearchPage extends Component {
  state = {
    searchResults: {}
  };

  searchProjects = query => {
    API.searchForProjects(query)
      .then(res => this.setState({ searchResults: res.data }, function() {}))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.searchProjects(window.location.href.split("q=").pop());
  }

  render() {
    return (
      <div>
        <HomeNav />
        <Wrapper>
          <h1 className="subTitle">Search Results</h1>
          <ul className="topFive">
            {Object.keys(this.state.searchResults).map(key => (
              <TopFiveProjects
                key={key}
                details={this.state.searchResults[key]}
              />
            ))}
          </ul>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default SearchPage;
