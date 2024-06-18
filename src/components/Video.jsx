import { NavLink } from 'react-router-dom';
import sampleVideo from '../images/sea-24216.mp4';

import ReactPlayer from 'react-player';
const Video = () => {
  return (
    <>
      <h4 className="tour">Tours</h4>
      <div className="video">
        <div className="player">
          <ReactPlayer url={sampleVideo} controls />
          <p className="children">
            journey of exploration and discovery through travel is a
            transformative experience that opens doors to new cultures,
            landscapes, and perspectives.
          </p>
          <NavLink to={'/travel'}>
            <button className="hero-btn btn-3">Visit</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Video;
