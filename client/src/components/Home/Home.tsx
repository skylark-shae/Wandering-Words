import { useEffect, useState } from "react";
import { getUser } from "../../service/UserService";
import { useNavigate } from "react-router";
import "./Home.css";
import { getTokenData } from "../../service/AuthService";
import { getAllPosts } from "../../service/PostService";
import { getAllAIPosts } from "../../service/AIPostService";
import Navbar from "../Navbar/Navbar";
import { getUselessFact } from "../../service/UselessFactsService";

const Home = () => {
  const [posts, setPosts] = useState<any>([])
  const [aiPosts, setAiPosts] = useState<any>([])
  const [uselessFact, setUselessFact] = useState<string>('');
  // const [activeUser, setActiveUser] = useState<IUserModel>();
  const navigate = useNavigate();

  useEffect(() => {
    // const data = getActiveUser();
    console.log('hi')
    const fetchUserData = async () => {
      const tokenData = getTokenData();
      if (tokenData === null) {
        console.log("Going back to the login component.");
        navigate("/Login");
        return;
      }
      try {
        if (tokenData) {
          console.log(tokenData);
          const result = await getUser(tokenData?.id);
          console.log(result);
        }
      } catch (error) {
        console.log(error)
        navigate("/Login");
        console.log("Going back to the login catch");
        return;
      }
    };

    const fetchAllPosts = async () => {

      const {data} = await getAllPosts();
      setPosts(data.reverse())
    }

    const fetchAllAiPost = async () => {

      const {data} = await getAllAIPosts();
      setAiPosts(data.reverse())
    }

    const fetchUselessFact = async () => {
      const {data} = await getUselessFact();
      console.log(data);
      setUselessFact(data.text)
    }
    
    fetchUserData();
    fetchAllPosts();
    fetchAllAiPost();
    fetchUselessFact();

  }, []);

  const handlePostNavigation = (id: string, aiPost: boolean) => {
    const route = aiPost ? `/ai-post/${id}` : `/post/${id}`
    navigate(route);
  }

  const abbreviate = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength - 3) + "...";
    }
  }

  const renderAllPosts = (allPosts: Array<any>, aiPost = false) => {
    return allPosts.map((post: any, index: number) => {
      const summarizedContent = abbreviate(post.content, 200)
      return (
        <div key={index} className="card" onClick={() => handlePostNavigation(post.id, aiPost)}>
          <h1>{ post.title }</h1>
          <p>{ summarizedContent }</p>
        </div>
      );
    })
  }

  return (
    <>
    <Navbar />
      {/* <div className="greeting-message">Welcome {data.username}</div>; */}
      <div className="home-page">
      <div className="useless-facts-container">
        <div>Random useless fact: "{uselessFact}"</div>
      </div>

      <div className="posts-container">
        <div className="center-post-list">
            <h3>User Posts</h3>
          { renderAllPosts(posts) }
        </div>
        <div className="ai-aside-posts">
            <h3>AI Posts</h3>
            {renderAllPosts(aiPosts, true)}
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;

// Skylark Changes for FeedbackForm
// import { useEffect, useState } from "react";
// import { deleteActiveUser, getActiveUser, IUserModel } from "../LocalStorage"; // Ensure getActiveUser is imported
// import { useNavigate } from "react-router-dom"; // Missing import

// const Home = () => {
//   const [activeUser, setActiveUser] = useState<IUserModel | null>(null); // Fix: useState
//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = getActiveUser();
//     if (data === null) {
//       navigate("/login");
//     } else {
//       setActiveUser(data);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     deleteActiveUser();
//     navigate("/login");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
//       <h1>Welcome {activeUser?.name}</h1>
//       <button onClick={handleLogout} style={styles.button}>Logout</button>
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => navigate("/contact")} style={styles.button}>
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// // Inline styles for simplicity
// const styles = {
//   button: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "10px 20px",
//     fontSize: "1em",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//   },
// };

// export default Home;
