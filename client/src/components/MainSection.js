import React from 'react';
import './MainSection.css';


export default function MainSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  featureDisplay,
  features,
  features1,
  features2,
  features3,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div class = {lightBg ? 'home__main-section' : 'home__main-section darkBg'}>
        <div class = 'container'>
          <div
            class = 'row home__main-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div class ='col'>
              <div class ='home__main-text-wrapper'>
                <div class ='top-line'>{topLine}</div>
                <h1 class = {lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  class = {
                    lightTextDesc
                      ? 'home__main-subtitle'
                      : 'home__main-subtitle dark'
                  }
                >
                  {description}
                </p>
                <ul class = {featureDisplay ? 'features' : 'noDisplay'}>
                  <li>{features}</li><br/>
                  <li>{features1}</li><br/>
                  <li>{features2}</li><br/>
                  <li>{features3}</li><br/>
               </ul>
              </div>
            </div>
            <div class ='col'>
              <div class ='home__main-img-wrapper'>
                <img src={img} alt={alt} className='home__main-img' />
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}