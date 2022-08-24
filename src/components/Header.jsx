import { useNavigate } from "react-router-dom";

const Header = ({ getPosts }) => {
  const handleChange = (option) => {
    // console.log(option);
    localStorage.setItem("lang", option);
    getPosts();
  };

  const lang = localStorage.getItem("lang");
  return (
    <nav className="container mb-4 mt-4">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <select
            className="custom-select pull-right"
            onChange={(e) => handleChange(e.target.value)}
            value={lang || "en"}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">Deutch</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
