import React, { useState, useEffect } from "react";
import Header from "../components/Index/Header";
import Search from "../components/Index/Search";
import Content from "../components/Content";
import { useRouter } from "next/router";

const Index = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/u/${search}`);
  };

  const searchChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <>
      <Content>
        <div className="flex flex-col items-center">
          <Header />
          <div className="mt-6" />
          <Search
            onSearchSubmit={searchSubmitHandler}
            onSearchChange={searchChangeHandler}
            search={search}
          />
        </div>
      </Content>
    </>
  );
};

export default Index;
