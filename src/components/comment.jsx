import React from 'react';

const Comment = ({ comment }) => {  
    return (
      <div className="comment p-4 border-b">
        <div className="comment-header flex items-center space-x-3">
          {/* Use optional chaining to check if user and image are defined */}
          <img
            src={comment?.user?.image?.png || 'default-image-url.png'} // Fallback to a default image if not available
            alt={comment?.user?.username || 'Unknown User'}  // Fallback to 'Unknown User' if username is missing
            className="avatar w-10 h-10 rounded-full"
          />
          <span className="username font-semibold">{comment?.user?.username || 'Unknown User'}</span>
          <span className="created-at text-gray-500">{comment?.createdAt || 'Unknown time'}</span>
        </div>
        <p className="comment-content mt-2">{comment?.content || 'No content'}</p>
        <div className="comment-footer mt-3 flex justify-between items-center">
          <span className="score">{comment?.score || 0} points</span>
        </div>
  
        {comment?.replies?.length > 0 && (
          <div className="replies mt-4">
            {comment.replies.map((reply) => (
              <div className="reply p-4 border-l-2" key={reply.id}>
                <div className="reply-header flex items-center space-x-3">
                  <img
                    src={reply?.user?.image?.png || 'default-image-url.png'}
                    alt={reply?.user?.username || 'Unknown User'}
                    className="avatar w-8 h-8 rounded-full"
                  />
                  <span className="username font-semibold">{reply?.user?.username || 'Unknown User'}</span>
                  <span className="created-at text-gray-500">{reply?.createdAt || 'Unknown time'}</span>
                </div>
                <p className="reply-content mt-2">
                  {reply?.replyingTo && (
                    <span className="replying-to text-gray-400">@{reply.replyingTo} </span>
                  )}
                  {reply?.content || 'No content'}
                </p>
                <div className="reply-footer mt-3 flex justify-between items-center">
                  <span className="score">{reply?.score || 0} points</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default Comment;
