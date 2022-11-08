import {useEffect, useState} from "react";
import {PostList} from "../types/typePostList";
import {getPostList} from "../api/getPost";
import {PostItem} from "../components/PostItem";

export const PostListPage = () => {

    const [posts, setPosts] = useState<PostList[]>()

    const get = (async () => {
        const json = await getPostList()
        setPosts(json)
    })

    useEffect(() => {
        get()
    }, [])

    return (
        <>
            <h1>ブログ一覧</h1>
            <ul>
                {
                    posts?.map((post, index) => <PostItem key={index} {...post}/>)
                }
            </ul>

        </>
    )
}