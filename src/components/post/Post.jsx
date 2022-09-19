import React, {useState} from "react";
import "./Post.css";
import { MoreVert, PostAddRounded } from "@material-ui/icons";
import { Users } from "../../dummyData";

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);

    const handelLike =() => {
        setLike(isLiked ? like-1 : like+1);
        setisLiked(!isLiked)
    }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="Post Profile"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img src="assets/like.png" onClick={handelLike} alt="" className="likeIcon" />
            <img src="assets/heart.png" onClick={handelLike} alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
