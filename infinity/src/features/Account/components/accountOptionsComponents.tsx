import React from 'react';

const AccountOptions = ({ heading, list }) => {
  return (
    <div className="mt-3">
      <div className="font-normal text-lg text-gray-500">{heading}</div>
      <ul className='ml-2'>
        {/* Map over the list dictionary and render list items */}
        {Object.entries(list).map(([key, value]) => (
          <li key={key} className="font-normal text-lg text-blue-400">
            {/* Handle links or other actions based on value */}
            {value === '#' ? (
              <span>{key}</span>
            ) : (
              <button className="border px-5 py-3">{key}</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountOptions;
