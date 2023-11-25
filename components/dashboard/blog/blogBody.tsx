import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import {
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import CommentsCard from "../childrenComponents/commentsCard";
import userHelpers from "@/helpers/userHelpers";
import React, { useCallback, useEffect, useState } from "react";
import blogHelpers from "@/helpers/blogHelpers";
import { useRouter } from "next/router";
import socket from "@/helpers/socket";

interface IBlogItem {
  Synopsis: string;
  cover: string;
  date: string;
  episodes: string;
  genre: string;
  title: string;
  typeAffichage: string[];
  type_anime: string;
  _id: string;
  Status: string;
  blogID: string;
}
const BlogBody: React.FC<IBlogItem> = ({
  Synopsis,
  cover,
  date,
  episodes,
  genre,
  title,
  typeAffichage,
  type_anime,
  Status,
  blogID,
}): JSX.Element => {
  const { dashboardHomeData } = dashboardDataHelper();
  const { postComments } = blogHelpers();
  const { fetchUser } = userHelpers();
  const router = useRouter();
  const { fetchComments } = blogHelpers();
  const [comments, setComments] = useState<any[]>([]);
  const [username, setUsername] = useState<string>("");

  const getComments = useCallback(async () => {
    let res = await fetchComments(blogID);
    setComments(res.response);

    socket.on("comment", (comment) => {
      console.log("commentaire reçu:", comment);

      setComments((prevComments) => {
        const commentExists = prevComments.some((c) => c._id === comment._id);

        if (!commentExists) {
          return [...prevComments, comment];
        }

        return prevComments;
      });
    });
  }, [setComments]);

  const getUser = useCallback(async () => {
    try {
      let res = await fetchUser();
      let userName = res.user.username;
      setUsername(userName);
      console.log("user obtenu: ", userName);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations del' utilisateur",
        error
      );
    }
  }, [setUsername]);

  useEffect(() => {
    getComments();
    getUser();

    return () => {
      socket.off("comment");
    };
  }, [getComments, setComments, getUser]);

  const handleClick = () => {
    socket.emit("connexion", "serveur connecté via React");
  };

  return (
    <div className="blog__body">
      <div className="cover" style={{ backgroundImage: `url("${cover}")` }}>
        <div className="element-container">
          <div className="row gx-5">
            <div className="col-4">
              <div className="section-cover">
                <img src={cover} alt="" />
              </div>
            </div>

            <div className="col-7">
              <div className="section-content">
                <div className="title">
                  <h2>{title}</h2>
                  <div className="date mt-1">
                    <p>
                      <b className="mx-1">Date de sortie : </b>
                      {date}
                    </p>
                  </div>
                </div>
                <div className="reactions mt-3">
                  <div className="like" onClick={handleClick}>
                    <p>
                      <FontAwesomeIcon icon={faHeart} className="mx-2" />
                      225
                    </p>
                  </div>
                  <div className="comments">
                    <p>
                      <FontAwesomeIcon icon={faComment} className="mx-2" />
                      225
                    </p>
                  </div>
                </div>
                <div className="episodes">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={dashboardHomeData.biblioIcon}
                      className="mx-2"
                    />{" "}
                    {episodes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="genre mt-3">
          <p>
            <b>Genre : </b>
            <span className="mx-2">{genre}</span>
          </p>
        </div>

        <div className="status">
          <p>
            <b>Status : </b>
            <span className="mx-2">{Status}</span>
          </p>
        </div>
        <div className="synopsis">
          <p>
            <b>Synopsis : </b> <span className="mx-2">{Synopsis}</span>
          </p>
        </div>
      </div>

      <div className="comments">
        <div className="comments__container">
          <div className="title">
            <h4>Commentaires (5)</h4>
            <div className="line"></div>
          </div>
          <div className="comments-content">
            {comments &&
              comments.map((item, index) => (
                <div key={index}>
                  <CommentsCard key={index} comment={item} />
                </div>
              ))}
          </div>

          <form
            action="post"
            onSubmit={(e: any) => {
              if (blogID) {
                postComments(e, blogID);
              }
            }}
          >
            <div className="post-comments">
              <div className="input">
                <textarea
                  name="commentValue"
                  placeholder="Entrez votre commentaire ..."
                ></textarea>
              </div>
              <div className="button-send">
                <button className="btn" type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
