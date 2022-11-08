import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostDetail} from "../api/getPost";
import {TypePostDetail} from "../types/typePostDetail";
import {PostDetail} from "../components/PostDetail";

export const PostDetailPage = () => {


    const {postId} = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [post, setPost] = useState<TypePostDetail | null>()

    useEffect(() => {
        const get = (async () => {
            if (postId) {
                const json = await getPostDetail(postId)
                setPost(json)
            }
        })()
    }, [postId])

    return isLoading ? (
        <div>Load</div>
    ) : post != null ? <PostDetail {...post}/> : null

}
