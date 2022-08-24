import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// Import Components
import Home from "./components/Home";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import PostDetails from "./components/PostDetails";

const App = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    const baseUrl = "http://localhost:5000";
    const lang = localStorage.getItem("lang");

    await axios
      .get(`${baseUrl}/posts`, {
        headers: {
          "Accept-Language": `${lang}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header getPosts={getPosts} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetails posts={posts} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
