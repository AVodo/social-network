import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://salvemusic.com.ua/wp-content/uploads/2020/02/ava-max3-839x1024.jpg'/>
            {props.message}
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    )
}

export default Post