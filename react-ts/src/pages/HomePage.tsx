import {useEffect, useState} from "react";
import {PostList} from "../types/typePostList";
import {getPostList} from "../api/getPost";
import {PostItem} from "../components/PostItem";
import styles from "../styles/Home.module.css";
import heroImg from "../images/home/homeHero.jpg"

export const HomePage = () => {

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
            <div className={styles.homeHeroArea}>
                <img className={styles.heroImg} src={heroImg} alt=""/>
                <h1 className={styles.pageTitle}>Home</h1>
            </div>
            <ul className={styles.postList}>
                {
                    posts?.map((post, index) =>
                        <PostItem key={index} {...post}/>
                    )
                }
            </ul>
        </>

    )
}
