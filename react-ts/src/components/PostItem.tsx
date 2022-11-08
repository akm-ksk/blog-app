import {PostList} from "../types/typePostList";
import {Link} from "react-router-dom";
import {dateFormat} from "../util/date";
import def from "../images/common/about.jpg"
import styles from "../styles/PostItem.module.css";

export const PostItem = (props: PostList) => {

    const {id, title, image, createTime} = props
    const url = `/post/${id}/`
    const formatDate: string = dateFormat(createTime)

    return (
        <li className={styles.postItem}>
            <Link to={url}>
                <div className={styles.postItemImgBox}>
                    <img className={styles.postItemImg} src={image ? `${image}` : def} alt=""/>
                </div>
                <h2 className={styles.postTitle}>{title}</h2>
                <div className={styles.postDay}>{formatDate}</div>
            </Link>
        </li>
    )
}