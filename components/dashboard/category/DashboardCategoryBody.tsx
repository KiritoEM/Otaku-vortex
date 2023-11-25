import blogHelpers from "@/helpers/blogHelpers";
import CardWithoutSwiper from "../childrenComponents/CardWithoutSwiper";
import { useCallback, useEffect, useState } from "react";
import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import io from "socket.io-client";

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
}

let filteredBlogs: IBlogItem[];

const DashboardCategoryBody = (): JSX.Element => {
  useEffect(() => {
    const socket = io("http://localhost:8000");
  
    socket.emit("message", { message: "depuis react" });
  
    socket.on("message", (data: any) => {
      console.log("Message reçu:", data);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);

  const { dashboardCategoryData } = dashboardDataHelper();
  const [active, setActive] = useState<string>("Tous");
  const [clicked, setClicked] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);

  const { fetchBlogs } = blogHelpers();

  // Function to fetch recents blog
  const getRecentsBlogs = useCallback(async () => {
    try {
      let res = await fetchBlogs();
      
      //sort blog to A-Z with title
      let sortedBlogs = res.blog.sort((a: any, b: any) =>
        a.title.localeCompare(b.title)
      );
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error("Erreur lors de la récupération des blogs", error);
    }
  }, [setBlogs]);

  useEffect(() => {
    getRecentsBlogs();
  }, [getRecentsBlogs]);

  //filter blog with category
  if (active) {
    const lowerCaseActive = active.toLowerCase();
    filteredBlogs = active
      ? blogs.filter((blogItem) =>
          blogItem.genre.toLowerCase().includes(lowerCaseActive)
        )
      : blogs;
  }

  //page Cover
  const cover = {
    title: "Animés Récents",
    cover: "/news-cover.png",
  };

  //toogle active category
  const handleButtonClick = (value: string) => {
    setActive(value);
    setClicked(value !== "Tous");
  };

  return (
    <section className="dashboard-category-content">
      {/* =============Section genre choice============ */}
      <div className="section-choice">
        {dashboardCategoryData.map((value, index) => (
          <div className="button-choice" key={index}>
            <button
              className={`btn ${active === value.button_value ? "active" : ""}`}
              onClick={() => handleButtonClick(value.button_value)}
            >
              {value.button_value}
            </button>
          </div>
        ))}
      </div>

      {/* =============Section card content============ */}
      <div className="section-content mt-2">
        <div className="row gx-4 gy-4">
          {clicked === true
            ? filteredBlogs.map((blogItem) => (
                <CardWithoutSwiper blogId={blogItem._id} key={blogItem._id} {...blogItem} />
              ))
            : blogs.map((blogItem) => (
                <CardWithoutSwiper blogId={blogItem._id} key={blogItem._id} {...blogItem} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardCategoryBody;
