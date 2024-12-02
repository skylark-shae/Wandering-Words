import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostById } from "../../service/PostService";

const AIArticle = () => {
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
            <div>
                <h1>{post.title}</h1>
                <h3>{post.subheading}</h3>
                <p>{post.content}</p>
            </div>
        </>
    )
}

export default AIArticle;