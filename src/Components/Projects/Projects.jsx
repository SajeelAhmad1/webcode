import projectData from "./projectAPI";
import Footer from "../Home/Footer";

const Projects = () => {
  const Games = projectData.map((game, index) => {
    let head = index === 0 ? true : false;
    let foot = index === 5 ? true : false;
    return (
      <div class="ui segment" style={{ width: "80%", marginLeft: "10%" }}>
        <b>{game.title}</b>
        <a href={game.link} download>
          <button class="ui primary button" style={{ float: "right" }}>
            Download
          </button>
        </a>
      </div>
    );
  });
  return (
    <>
      <div><br /><br />
      <h2 class="ax ui header">
        <div class="content">
          We offer following
          <span className="ques indigo-500"> Projects</span>
        </div>
      </h2>
      </div><br />
      {Games}
      <Footer />
    </>
  );
};
export default Projects;
