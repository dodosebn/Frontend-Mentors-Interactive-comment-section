import React, { useState } from "react";
import Buttons from "./buttons";
import DeleteIcon from "../assets/icon-delete.svg";
import EditIcon from "../assets/icon-edit.svg";
import PlusIcon from "../assets/icon-plus.svg";
import ReplyIcon from "../assets/icon-reply.svg";
import minusIcon from "../assets/icon-minus.svg";
import DelMes from "./deleteMessage";
import Input from "./useInput";

const Comment = ({ comment, setData, isUserComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment?.content);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [replyingToCommentId, setReplyingToCommentId] = useState(null);
  const [count, setCount] = useState(comment?.score || 0);
 const [showDelModal, setShowDelModal] = useState(false);
 
 const handleDelete = (commentId) => {
  setData((prevData) => ({
    ...prevData,
    comments: prevData.comments.filter((c) => c.id !== commentId),
  }));
};

const confirmDelete = () => {
  setShowDelModal(true); 
};

const onYes = () => {
  handleDelete(comment.id);
  setShowDelModal(false); 
};

const onCancel = () => {
  setShowDelModal(false); 
};
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    setData((prevData) => ({
      ...prevData,
      comments: prevData.comments.map((c) =>
        c.id === comment.id ? { ...c, content: editedContent } : c
      ),
    }));
    setIsEditing(false);
  };

  const handleReplyClick = () => {
    setIsReplying(true);
    setReplyingToCommentId(comment.id);
  };

  const handleReplySubmit = () => {
    if (!replyContent.trim()) return;

    const newReply = {
      content: replyContent,
      id: Date.now(),
      score: 0,
      createdAt: new Date().toLocaleTimeString(),
      createdBy: "You",
      user: {
        username: "juliusomo",
        image: {
          png:' https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      },
      replyingTo: comment.user.username,
    };

    setData((prevData) => ({
      ...prevData,
      comments: prevData.comments.map((c) =>
        c.id === replyingToCommentId
          ? { ...c, replies: [...c.replies, newReply] }
          : c
      ),
    }));

    setReplyingToCommentId(null);
    setReplyContent("");
    setIsReplying(false);
  };

  return (
    <div className="p-8 items-center text-grayishBlue lg:px-48">
      <div className="whiteCard">
        <section className="pt-3 ">
          <div className="userDetails">
            <img
              src={comment?.user?.image?.png || "default-image-url.png"}
              alt={comment?.user?.username}
              className="avatar w-10 h-10 rounded-full"
            />
            <span className="userName">{comment?.user?.username}</span>
            <p className="createdAt">{comment?.createdAt}</p>
            {comment?.createdBy ? (
              <p className="bg-moderateBlue text-white p-1 rounded-sm text-sm">
                {comment?.createdBy}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="commentCont">
            {isEditing ? (
              <form onSubmit={handleUpdateClick}>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full p-2 border border-grayishBlue outline-none rounded-md"
              />
              <Buttons className="lg:ml-[44.5rem] ml-[15.5rem] lg:mt-2 bg-moderateBlue p-2 text-white rounded-md" type={'Update'} iconClass={'hidden'}/>
              </form>
            ) : (
              <p className="mt-1">{comment?.content}</p>

              
            )}
          </div>
          <div className={` ${comment?.content.length < 87 ? 'lg:mt-8' : "mt-2"} flex justify-between items-center p-2 lg:relative`}>
            <div className={`flex md:flex-col gap-3 items-center space-x-2 lg:space-x-1 bg-veryLightGray p-2 pr-4 ml-2  mb-2 rounded-md lg:absolute ${isEditing ? 'bottom-32' : "bottom-11"}`}>
              <Buttons
                icon={PlusIcon}
                handleClick={() => setCount((prev) => prev + 1)}
                iconClass={'hover:text-moderateBlue'}
              />
              <h1 className="text-moderateBlue font-bold">{count}</h1>
              <Buttons
                icon={minusIcon}
                handleClick={() => setCount((prev) => prev - 1)}
                iconClass={'hover:text-moderateBlue'}
              />
            </div>
            <div className={`${isUserComment ? 'left-[45rem]' : 'left-[49rem]'} pr-4 lg:absolute  ${isEditing ? 'bottom-48' : "bottom-24"}`}>
              {isUserComment ? (
                <div className="flex gap-4 items-center">
                  <Buttons
                  handleClick={confirmDelete}
                  icon={DeleteIcon}
                    type="Delete"
                  />
                 
                    <Buttons
                      type="Edit"
                      className="text-moderateBlue"
                      icon={EditIcon}
                      handleClick={handleEditClick}
                    />
                </div>
              ) : (
                <Buttons
                  type="Reply"
                  handleClick={handleReplyClick}
                  className="text-moderateBlue"
                  icon={ReplyIcon}
                />
              )}
            </div>
          </div>
        </section>
      </div>

      {comment?.replies?.length > 0 && (
        <div className="mt-4 lg:mt-0">
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
                    {reply?.createdBy ? (
                      <span className="bg-moderateBlue text-white p-1 rounded-sm text-sm">
                        {reply?.createdBy}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="commentCont mt-2">
                    {reply?.replyingTo && (
                      <span className="replying-to text-gray-400">
                        @{reply.replyingTo}{" "}
                      </span>
                    )}
                    {reply?.content}
                  </div>
                  <div 
  style={{ marginTop: reply?.content.length < 87 ? '2rem' : '1rem' }} 
  className="flex justify-between items-center p-2 lg:relative"
>
                  <div className={`flex md:flex-col gap-3 items-center space-x-2 lg:space-x-1 bg-veryLightGray p-2 pr-4 ml-2  mb-2 rounded-md lg:absolute ${isEditing ? 'bottom-32' : "bottom-11"}`}>
                  <Buttons
                icon={PlusIcon}
                handleClick={() => setCount((prev) => prev + 1) }
                iconClass={'hover:text-moderateBlue'}
              />
              <h1 className="text-moderateBlue font-bold">{count}</h1>
              <Buttons
                icon={minusIcon}
                handleClick={() => setCount((prev) => prev - 1)}
                iconClass={'hover:text-moderateBlue'}
              />
                    </div>
                    <div className={`${isUserComment ? 'left-[45rem]' : 'left-[48rem]'} pr-4 lg:absolute  ${isEditing ? 'bottom-48' : "bottom-24"}`}>
              {isUserComment ? (
                <div className="flex gap-4 items-center">
                  <Buttons
                  handleClick={confirmDelete}
                  icon={DeleteIcon}
                    type="Delete"
                  />
                 
                    <Buttons
                      type="Edit"
                      className="text-moderateBlue"
                      icon={EditIcon}
                      handleClick={handleEditClick}
                    />
                </div>
              ) : (
                <Buttons
                  type="Reply"
                  handleClick={handleReplyClick}
                  className="text-moderateBlue"
                  icon={ReplyIcon}
                />
              )}
            </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      )}

      {isReplying && (
        <div className="mt-4  whiteCard p-4">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write your reply here"
            className="w-full p-2 border border-grayishBlue outline-none rounded-md"
          />
        <Buttons handleClick={handleReplySubmit} type={'Reply'} className={'bg-moderateBlue text-white p-2 px-4 rounded-md lg:ml-[48.5rem] ml-[15.5rem] lg:mt-2' } iconClass={'hidden'}/>
        </div>
        
      )}
         {showDelModal && (
          <>
        <DelMes
          onCancel={onCancel} 
          onYes={onYes}       
        /></>
      )}
    </div>
  );
};

export default Comment;
