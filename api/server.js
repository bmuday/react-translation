const { json } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

const { posts } = require("./posts");
// console.log(posts);

// Cors policy
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the posts API!" });
});

app.get("/posts", (req, res) => {
  const lang = req.headers["accept-language"].substring(0, 2);
  //   console.log("lang", lang);

  const translate = (post, lang) => {
    const { id, image, translations } = post;
    let filteredTranslation = translations.filter(
      ({ locale }) => locale == lang
    );
    return {
      id,
      image,
      translation: filteredTranslation[0],
    };
  };

  let p = posts.map((post) => {
    return translate(post, lang);
  });

  res.json(p);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
