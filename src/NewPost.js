import React from 'react'

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form
        className='newPostForm'
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          required
          placeholder='Type the title'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          placeholder='Type the post body'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Add post</button>
      </form>
    </main>
  )
}

export default NewPost
