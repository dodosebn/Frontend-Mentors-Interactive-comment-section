import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Input = ({ data, setData }) => {
  const [inpChnge, setInpChnge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      content: inpChnge,
      id: Date.now(),
      score: 2,
      createdAt: timeAgo(Date.now() - 5000),
      createdBy: "You",
      user: { 
        username: "juliusomo",
        image: {
          png: "https://plus.unsplash.com/premium_photo-1664541336661-e67e3dbc9ed7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        },
      },
      replies: [],
    };

    setData({
      ...data,
      comments: [newComment, ...data.comments], 
    });

    setInpChnge('');
  };

  function timeAgo(date) {
    return dayjs(date).fromNow();
  }

  return (
    <div className='pl-7 pr-7'>
      <form onSubmit={handleSubmit} className='p-5 whiteCard'>
        <div className='flex items-center'>
          <textarea
            value={inpChnge}
            onChange={(e) => setInpChnge(e.target.value)}
            placeholder="Kay ife ne eme"
            className='w-full p-2 border border-grayishBlue outline-none rounded-md'
          ></textarea>
        </div>
        <div className='flex justify-between items-center pt-2'>
            <img className="w-10 h-10 rounded-full" src="https://plus.unsplash.com/premium_photo-1664541336661-e67e3dbc9ed7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anyhow"/>
          <button className='text-2xl text-center text-white bg-moderateBlue p-3 pl-6 font-medium  rounded-md'>send</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
