import './Article.css';


function Article({cover,category,publishedAt,title,shortDescription}){

    return (
    <div className="Article">
        <div className="cover"><img src={cover} alt={`image of ${title}`} /></div>
        <div className="details">
            <span>{category.toUpperCase()}</span>
            <span>{publishedAt}</span>
        </div>
        <h2 className="title">
            {title}
        </h2>
        <p>
            {shortDescription}
        </p>
    </div>)

}

export default Article;