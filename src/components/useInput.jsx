import React, { useState } from 'react'; 
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Input = ({ data, setData}) => {
  const [inpChnge, setInpChnge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inpChnge.trim()) return;

    const newComment = {
      content: inpChnge,
      id: Date.now(),
      score: 2,
      createdAt: timeAgo(Date.now()),
      createdBy: 'You',
      user: {
        username: 'juliusomo',
        image: {
          png:' https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      },
      replies: [],
    };

    
      setData({
        ...data,
        comments: [{ ...newComment, isUserComment: true }, ...data.comments],
      });
    

    setInpChnge('');
  };

  function timeAgo(date) {
    return dayjs(date).fromNow();
  }

  return (
    <div className="pl-7 pr-7 pb-4  lg:px-48">
      <form onSubmit={handleSubmit} className="p-4 whiteCard">
        <div className="flex items-center">
          <textarea
            value={inpChnge}
            onChange={(e) => setInpChnge(e.target.value)}
            placeholder= "Write your comment"
            className="w-full p-2 border border-grayishBlue outline-none rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-between items-center pt-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="your-avatar"
          />
          <button className="text-2xl text-center text-white bg-moderateBlue p-1 px-4 font-medium rounded-md">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
