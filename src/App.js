import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [perPageNumber, setPerPageNumber] = useState(10)

  useEffect(() => {
    const requestPosts = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3001/post',{currentPage, perPageNumber})
      console.log(response)
      setPosts(response.data.content)
      setTotalPage(response.data.totalPage)
      setLoading(false)
    }
    requestPosts()
  }, [])
  
  return (
    <div className="Container">
      <h1 className="my-project-title">我的文章</h1>
    </div>
  );
}

export default App;
