import Layout from './Layout'
import About from './About'
import Home from './Home'
import Missing from './Missing'
import NewPost from './NewPost'
import PostPage from './PostPage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

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

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter((post) => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse())
  }, [search, posts])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody 
    }

    const postsList = [...posts, newPost]

    setPosts(postsList)
    setPostTitle('');
    setPostBody('');
    navigate('/')
  }

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id)
    setPosts(postsList)
    navigate('/')
  }

  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
      />} >
        <Route index element={<Home 
          posts={searchResults}
        />} />
        <Route path="post">
          <Route index element={<NewPost 
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />} />
          <Route path=":id" element={<PostPage 
          posts={posts}
          handleDelete={handleDelete} />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
