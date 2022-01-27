import React from 'react';
import './Background.css';

export default function BackgroundAlter({
    topLine,
    lightText,
    headline,
    description,
    bimg,
    alt,
    imgStart,
    
  }) {
    return (
      <>
        <div className = 'content'>
          <div className = 'container'>
            <div
              className = 'bg_row home__main-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'bg_start' ? 'bg_row-reverse' : 'bg_row'
              }}
            >
              <div className ='bg_col'>
                <div className ='bg__main-text-wrapper'>
                  <div className ='bg_top-line'>{topLine}</div>
                  <h1 className = {lightText ? 'bg_heading' : 'bg_heading dark'}>
                    {headline}
                  </h1>
                  <p className = 'bg_main_text'>
                    {description}
                  </p>
                </div>
              </div>
              <div className ='bg_col'>
                <div className ='bg_home__main-img-wrapper'>
                  <img src={bimg} alt={alt} className='bg_home__main-img' />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </>
    );
  }