import React, { useState } from "react";
import Header from "../components/Index/Header";
import Search from "../components/Index/Search";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Container from "../components/Container";

const Index = () => {
  const [search, setSearch] = useState("");
  const searchSubmitHandler = event => {
    event.preventDefault();
    console.log("searh", search);
  };

  const searchChangeHandler = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <>
      <Container>
        <Content>
          <div className="flex flex-col items-center">
            <Header />
            <Search
              onSearchSubmit={searchSubmitHandler}
              onSearchChange={searchChangeHandler}
              search={search}
            />
          </div>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
