import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import moment from "moment";
import { addLike, removeLike } from "../../actions/post";
const PostItem = ({
  auth,
  addLike,
  removeLike,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to="/profile">
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">
        Posted on {"  "}
        <Moment format="YYYY/MM/DD">
          {moment(date).format("YYYY-MM-DD[T]HH:mm:ss")}
        </Moment>
      </p>
      <button
        type="button"
        onClick={(e) => addLike(_id)}
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-up"></i>
        {"   "}
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>
      <button
        type="button"
        onClick={(e) => removeLike(_id)}
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-down"></i>
      </button>
      <Link to={`/post/${_id}`} className="btn btn-primary">
        Discussion
        {comments.length > 0 && (
          <span className="comment-count">{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button type="button" className="btn btn-danger">
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
