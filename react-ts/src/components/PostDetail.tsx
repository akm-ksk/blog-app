import {TypePostDetail} from "../types/typePostDetail";
import defaultImage from "../images/common/about.jpg"
import {dateFormat} from "../util/date";
import styles from "../styles/PostDetail.module.css"

export const PostDetail = (props: TypePostDetail) => {

    const {id, title, text, image, createTime, updateTime} = props

    const formatCreateTime = dateFormat(createTime)
    const formatUpdateTime = dateFormat(updateTime)

    return (
        <div className={styles.postArea}>
            <h1 className={styles.postTitle}>{title}</h1>
            <ul className={styles.dateBox}>
                <li className={styles.dateItem}>投稿日時 : {formatCreateTime}</li>
                {
                    formatCreateTime != formatUpdateTime ?
                        <li className={styles.dateItem}>更新日時 : {formatUpdateTime}</li> : null
                }
            </ul>
            <figure className={styles.imgBox}>
                <img src={image ? image : defaultImage} alt=""/>
            </figure>
            <p>{text}</p>
        </div>
    )
}