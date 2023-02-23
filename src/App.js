import Layout from './Layout'
import About from './About'
import Home from './Home'
import Missing from './Missing'
import NewPost from './NewPost'
import PostPage from './PostPage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      datetime: "July 01, 2021 11:17:36 AM",
      body: 'Lorem ipsum dolor sit amet'
    },
    {
      id: 2,
      title: 'Post 2',
      datetime: "June 05, 2021 11:17:36 PM",
      body: 'Lorem ipsum dolor sit amet'
    },
    {
      id: 3,
      title: 'Post 3',
      datetime: "July 16, 2022 07:17:36 AM",
      body: 'Lorem ipsum dolor sit amet'
    }
  ])
  const [search, setSearch] = ('')

  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
      />} >
        <Route index element={<Home 
          posts={posts}
        />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
