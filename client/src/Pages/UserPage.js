import React from 'react';
import Background from '../components/Background';
import { bgObjOne } from '../Pages/Background/BgData';

export default function UserPage({user}) {
  
  return (
    <div>

      
      <Background {...bgObjOne} />
  
      <h1>Hello {user}</h1>


    </div>
  );
}
