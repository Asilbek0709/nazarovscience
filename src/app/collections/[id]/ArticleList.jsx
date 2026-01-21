"use client";

export default function ArticleList({ collection }) {
  return (
    <div className="article-section">
      <div className="title">
        <h1>{collection.title}</h1>
      </div>
      <ul className='articles'>
        {collection.articles.map(article => (
          <li key={article.id} className='article-card'>
            <div className="info">
              <p><strong>{article.title}</strong></p>
              <p>{article.author}</p>
            </div>
            <div className="page-and-button">
              <p><strong>{article.page}</strong></p>
              <a href={article.file} download>
                <button className='download'>Yuklash</button>
              </a>
              <a href={article.file} target='_blank' rel="noopener noreferrer">
                <button className='download'>O`qish</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
