import React from "react";
import Header from "../components/Header";
import ArticleList from "./ArticleList";
import About from "../components/About";
import blogData from "../data/blog";


console.log(blogData);

function App() {
  return (
    <div className="App">
      < Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts} />
      
      
    </div>
  );
}

export default App;
