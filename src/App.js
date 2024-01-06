import React, { useState } from 'react';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const handleAddArticle = () => {
    if (newTitle.length <= 12 && newContent.length <= 25) {
      const newArticle = { title: newTitle, content: newContent };
      setArticles([...articles, newArticle]);
      setNewTitle('');
      setNewContent('');
    } else {
      alert('Вы ввели более 12 символов в заголовке или более 25 символов в контенте!');
    }
  };

  const handleEditArticle = () => {
    if (editedTitle.length <= 12 && editedContent.length <= 25) {
      const updatedArticles = articles.map((article) => {
        if (article === selectedArticle) {
          return { ...article, title: editedTitle, content: editedContent };
        }
        return article;
      });
      setArticles(updatedArticles);
      setSelectedArticle(null);
    } else {
      alert('Title should be up to 12 characters and content up to 25 characters.');
    }
  };

  const handleDeleteArticle = (article) => {
    setArticles(articles.filter((item) => item !== article));
  };

  return (
    <div>
      <h1>Блог</h1>
      <div>
        <h2>Создать статью</h2>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Заголовок (до 12 символов)" // При вводе более 12 символов сайт уведомляет
        />
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Текст статьи (до 25 символов)" // При вводе более 25 символов сайт уведомляет
        />
        <button onClick={handleAddArticle}>Добавить статью</button>
      </div>
      <div>
        <h2>Статьи</h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <button onClick={() => setSelectedArticle(article)}>Редактировать</button>
            <button onClick={() => handleDeleteArticle(article)}>Удалить</button>
          </div>
        ))}
      </div>
      {selectedArticle && (
        <div>
          <h2>Редактор статьи</h2>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Заголовок (до 12 символов)" // При вводе более 12 символов сайт уведомляет
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Текст статьи (до 25 символов)" // При вводе более 25 символов сайт уведомляет
          />
          <button onClick={handleEditArticle}>Сохранить</button>
        </div>
      )}
    </div>
  );
};

export default App;