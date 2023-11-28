
import './SingleArticle.css';
import { useParams } from 'react-router-dom';

const SingleArticle = ({articles}) => {
  const { id } = useParams();
  const selectedArticle = articles.find(article => article.id === id);

  return (
    <div className='singleArticle'>
      <h1>{selectedArticle.title}</h1>
      <img
        src={selectedArticle.imageUrl}
        alt={selectedArticle.title}
      />
      <p>
        {selectedArticle.body}
      </p>
    </div>
  );
};

export default SingleArticle;
