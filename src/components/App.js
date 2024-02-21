// App.js
import React from 'react';
import ArticleList from './ArticleList';
import MainContent from './MainContent';  // Update the import path if needed
import Header from './Header';
import Sidebar from './Sidebar';

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post."
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post."
  }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <MainContent>
          <ArticleList posts={posts} />
        </MainContent>
      </div>
    </div>
  );
};

export default App;
