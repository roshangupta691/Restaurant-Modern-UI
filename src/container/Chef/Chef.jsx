import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>
    <div className="app__wrapper_info">
      < SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans"><q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, consectetur mollitia! Suscipit exercitationem illum soluta beatae hic assumenda quia nostrum, consequatur aliquam vel corrupti dolores, possimus quibusdam, quae aut nesciunt.</q></p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
