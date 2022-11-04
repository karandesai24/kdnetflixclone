import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

import { axiosInstance } from "../../config";
import { Link } from "react-router-dom";
export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axiosInstance.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  const watchNow = () => {};

  return (
    <div className="featured">
      {type === "movie" && (
        <div className="category">
          <span>{"Movies"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>

            <option value="Comedy">Comedy</option>

            <option value="Sports">Sports</option>
            <option value="Documentary">Documentary</option>
            <option value="Romantic">Romantic</option>
            <option value="Action & Adventure">Action & Adventure</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
      )}
      {type === "series" && (
        <div className="category">
          <span>{"Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>

            <option value="Comedy">Comedy</option>

            <option value="Sports">Sports</option>
            <option value="Documentary">Documentary</option>

            <option value="Action n Adventure">Action & Adventure</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to="/watch" state={{ movie: content }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
