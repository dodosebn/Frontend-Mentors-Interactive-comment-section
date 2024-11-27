import React,{useState} from 'react';
import Data from './data'; 
import Comment from './components/comment';
import Input from './components/input';


const App = () => {
  const [data, setData] = useState(Data[0]); 
console.log(data);

  return (
    <div className="comments-container">
      <h1 className="text-2xl font-bold mb-4">Comments Section</h1>
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
              <div>
                <Input data={data} setData={setData}/>
              </div>

    </div>
  );
}

export default App;
