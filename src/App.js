import React,{useState} from 'react';
import Data from './data'; 
import Comment from './components/comment';
import Input from './components/input';


const App = () => {
  const [data, setData] = useState(Data[0]); 

  return (
    <div className="bg-lightGray">
         {data.comments.map((comment) => (
      <Comment
      key={comment.id}
      comment={comment}
      setData={setData} 
    />
    
      ))}
                <Input data={data} setData={setData}/>

    </div>
  );
}

export default App;
