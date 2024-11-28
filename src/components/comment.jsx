import React, { useState } from "react";
import Buttons from "./buttons";
import DeleteIcon from '../assets/icon-delete.svg';
import EditIcon from '../assets/icon-edit.svg';
import PlusIcon from '../assets/icon-plus.svg';
import ReplyIcon from '../assets/icon-reply.svg';
import minusIcon from '../assets/icon-minus.svg';

const Comment = ({ comment, setData }) => {
  const [randComments, setRandComments] = useState(false);

  const handleDelete = (commentId) => {
    setData((prevData) => ({
      ...prevData,
      comments: prevData.comments.filter((comment) => comment.id !== commentId),
    }));
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      handleDelete(comment.id);
    }
  };

  const onReply = () => {};

  return (
    <div className="p-8 items-center text-grayishBlue">
      <div className="whiteCard">
        <section className="pt-3">
          <div className="userDetails">
            <img
              src={comment?.user?.image?.png || "default-image-url.png"}
              alt={comment?.user?.username}
              className="avatar w-10 h-10 rounded-full"
            />
            <span className="userName">{comment?.user?.username}</span>
            <p className="createdAt">{comment?.createdAt}</p>
            {comment?.createdBy ? 
                    (<p className="bg-moderateBlue text-white p-1 rounded-sm text-sm">{comment?.createdBy}</p>)
                    : ('')
                  }

          </div>
          <div className="commentCont">
            <p className="mt-2">{comment?.content}</p>
          </div>
          <div className="mt-3 flex justify-between items-center p-2">
            <div className="flex items-center space-x-2 bg-veryLightGray p-2 pr-4 ml-4 mb-2 rounded-md">
              <Buttons icon={PlusIcon} />
              <h1 className="text-moderateBlue font-bold">{comment?.score}</h1>
              <Buttons icon={minusIcon} />
            </div>
            <div className="pr-4">
              {randComments ? (
                <Buttons
                  type="reply"
                  handleClick={onReply}
                  className="text-moderateBlue"
                  icon={ReplyIcon}
                />
              ) : (
                <div className="flex gap-4 items-center">
                  <Buttons
                    className="flex gap-1"
                    handleClick={confirmDelete}
                    icon={DeleteIcon}
                    type="Delete"
                  />
                  <Buttons
                    type="Edit"
                    className="text-moderateBlue flex gap-1"
                    icon={EditIcon}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      {comment?.replies?.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply) => (
            <div className="p-4 border-l-2" key={reply.id}>
              <div className="whiteCard">
                <section className="pt-3">
                  <div className="userDetails">
                    <img
                      src={reply?.user?.image?.png}
                      alt={reply?.user?.username}
                      className="avatar w-8 h-8 rounded-full"
                    />
                    <p className="userName">{reply?.user?.username}</p>
                    <span className="createdAt">{reply?.createdAt}</span>
                    {comment?.createdBy ? 
                    (<span className="bg-moderateBlue text-white p-1 rounded-sm text-sm">{comment?.createdBy}</span>)
                    : ('')
                  }

                  </div>
                  <div className="commentCont mt-2">
                    {reply?.replyingTo && (
                      <span className="replying-to text-gray-400">
                        @{reply.replyingTo}{" "}
                      </span>
                    )}
                    {reply?.content}
                  </div>
                  <div className="mt-3 flex justify-between items-center p-2">
                    <div className="flex items-center space-x-2 bg-veryLightGray p-2 pr-4 ml-4 mb-2 rounded-md">
                      <Buttons icon={PlusIcon} />
                      <h1 className="text-moderateBlue font-bold">{reply?.score}</h1>
                      <Buttons icon={minusIcon} />
                    </div>
                    <div className="pr-4">
                      {randComments ? (
                        <Buttons
                          type="reply"
                          handleClick={onReply}
                          className="text-moderateBlue"
                          icon={ReplyIcon}
                        />
                      ) : (
                        <div className="flex gap-4 items-center">
                          <Buttons
                            className="flex gap-1"
                            handleClick={confirmDelete}
                            icon={DeleteIcon}
                            type="Delete"
                          />
                          <Buttons
                            type="Edit"
                            className="text-moderateBlue flex gap-1"
                            icon={EditIcon}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
