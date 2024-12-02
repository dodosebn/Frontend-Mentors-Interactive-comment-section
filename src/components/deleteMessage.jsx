import React from 'react';
import Buttons from './buttons';

const DelMes = ({ onCancel, onYes }) => {
  return (
    <div className=" fixed inset-0 bg-opacity-75 bg-gray-800 flex justify-center items-center">
      <div className="whiteCard shadow-md text-center p-4">
        <h1 className="text-xl text-darkBlue font-bold flex justify-start">Delete comment</h1>
        <p className="mt-2 text-text-grayishBlue font-medium w-[17rem] items-start">
          Are you sure you want to delete this <span className='pr-9'>comment? This will remove the</span><span className='pr-9'> comment and can't be undone.</span>
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Buttons
            type="No, Cancel"
            className="bg-grayishBlue text-white px-4 py-2 rounded-md"
            handleClick={onCancel}
            iconClass='hidden'
          />
          <Buttons
            type="Yes, Delete"
            className="bg-softRed text-white px-4 py-2 rounded-md"
            handleClick={onYes}
            iconClass='hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default DelMes;
