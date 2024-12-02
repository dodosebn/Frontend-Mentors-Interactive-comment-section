import React, { useState } from 'react';
import Data from './data'; 
import Comment from './components/comment';
import Input from './components/useInput';
import Footer from './components/footerMessage';
const App = () => {
  const [data, setData] = useState(Data[0]); 

  return (
    <div className="bg-lightGray">
      {data.comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}                              
          setData={setData}
          isUserComment={comment.isUserComment}   
        />
      ))}
      <>
      <Input data={data} setData={setData}/>
      </>
     
    <Footer name='ORJI DOMINION'/>
    </div>
  );
}

export default App;
