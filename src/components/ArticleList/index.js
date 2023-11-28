import { Route, Switch, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleArticle from '../SingleArticle';
import { loadArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  },[dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {
          articles.map(article => (
            <li>
              <NavLink
                key={article.id}
                to={`/article/${article.id}`}
                >
              {article.title}
              </NavLink>
            </li>
          ))
        }
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle articles={articles}/>
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
