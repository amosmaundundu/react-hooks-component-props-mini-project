import React from "react";



const Minutes= ({minutes}) => {
    let emoji= minutes<30? minutes<=3?"☕️": minutes>3?"☕️☕️ ":
    minutes <= 35 ? "🍱🍱🍱🍱" : minutes >= 61 ? "🍱🍱🍱🍱🍱🍱🍱" : "🍱🍱🍱🍱🍱🍱"
    : "🍱🍱🍱🍱🍱🍱";

return (
    <div>
        {`.${emoji}${minutes}min to read`}
    </div>
)
}
function Article({ title, date, preview, minutes }) {
    return (
        <article>
            <h3>{title}</h3>
            <small className="dateInfo">{date ? date : "January 1, 1970"}<Minutes minutes={minutes} /></small>
            <p>{preview}</p>
        </article>);
}

export default Article;