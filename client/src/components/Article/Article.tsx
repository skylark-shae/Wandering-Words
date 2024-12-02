import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostById } from "../../service/PostService";
import './Article.css'
import Navbar from "../Navbar/Navbar";

const Article = () => {
    const [post, setPost] = useState<any>({
        title: '',
        subheading: '',
        content: ''
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            console.log(id)
            if (id) {
                const {data} = await getPostById(id);
                console.log(data)
                setPost(data)
            }
        }
        fetchPost();
    }, [])

    return (
        <>
        <Navbar />
            <div className="article-container">
                <div className="article">
                    <h1>{post.title}</h1>
                    <h3>{post.subheading}</h3>
                    <p>{post.content}</p>
                </div>
            </div>
        </>
    )
}

export default Article;