import React from 'react';
import MainSection from '../../../src/components/MainSection';
import { homeObjOne, homeObjTwo } from './Data';


export default function Home() {
  return (
    <>
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjTwo} />
    
    </>
  );
}