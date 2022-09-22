
import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {


    return (
        <main>
            {posts ? posts.map(({ title, date, breview, minutes }, i) => (
                <Article key={i} title={title} minutes={minutes} date={date} breview={breview} />
            )) : ""}

        </main>);
}

export default ArticleList;
