import React from "react";
import Header from "./header";
import Post from "./post";
import Footer from "./footer"
import packageJson from '../../../package.json';

import inViewport from 'react-in-viewport';

import db from "../../firebase.js";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

export default function RecomendationGPT() {

  const [desc, setDesc] = React.useState([]);
  const [response, setResponse] = React.useState("");

  const PostWithViewport = inViewport(Post);

  // generate rec using chatgpt 🤖👇

  const generateRecomendation = () => {
      fetch("http://localhost:8080/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              prompt: "tell big text interesting news about football", // question ❓
          }),
        })
          .then((response) => response.text())
          .then((data) => {
            setResponse(data);
          })
          .catch((error) => {
            console.error(error);
          });
  }

  // add new document in firebase 💾👇
  
  const add = async () => {
      try {
        const docRef = await addDoc(collection(db, "football"), {
          description: response, 
        });
        console.log("Document written with ID: ", docRef.id);
      } catch {
        console.error("Error adding document");
      }
  }

  // real time update firebase 💾👇

  React.useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db, "football"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
      setDesc(newData);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="wrapper">
      <Header money="100" />
      <div className="main">
        <section className="blog__content__section">
          <div className="container row-blog__content">
            {desc.length === 0 ? (
              <div className="div_p-empty-post__rec">
                <p>Post list is empty! :(</p>
              </div>
            ) : (
              <div id="fullpage" className="block__card-blog__content">
                {desc.map((descs, i) => ( // map desc list posts from firebase 💖
                  descs.isView === true ? ( // checking if a post has been viewed before 👀
                    null
                  ) : (
                    <PostWithViewport
                      className="post"
                      key={i}
                      response={
                        descs.description.length < 10
                          ? "Sorry this post is not available!"
                          : descs.description
                      }
                      isViewPost={null}
                      onEnterViewport={() => console.log("Enter Viewport", i)} // view post 👁‍🗨
                    />
                  )
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer name="borodach" version={packageJson.version} />
    </div>
  );  
};