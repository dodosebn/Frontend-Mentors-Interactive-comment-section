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
      createdAt: timeAgo(Date.now()),
      user: { 
        username: "juliusomo",
        image: {
          png: "https://example.com/avatar.png", 
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={inpChnge}
            onChange={(e) => setInpChnge(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
        </div>
        <div>
          <button>send</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
