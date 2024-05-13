import React from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './serv_video.css';
import how from "../../../videos/howru.mp4"
import thumbsUp from '../../../imgs/videoplayback.webm'
import again from "../../../videos/again.mp4"
import bye from "../../../videos/bye.mp4"
import deaf from "../../../videos/deaf.mp4"
import hello from "../../../videos/hello.mp4"
import man from "../../../videos/man.mp4"
import me from "../../../videos/me.mp4"
import you from "../../../videos/you.mp4" 
import j from "../../../videos/J.mp4"
import l from "../../../videos/L.mp4"
import n from "../../../videos/N.mp4"
import o from "../../../videos/O.mp4"
import q from "../../../videos/Q.mp4"
import s from "../../../videos/S.mp4"
import t from "../../../videos/T.mp4"
import she from "../../../videos/she.mp4"





 



const videoData = [
  { id: 1, source: thumbsUp, description: 'Thumbs Up' },
  { id: 2, source: again, description: 'Again ' },
  { id: 3, source: bye, description: 'Bye' },
  { id: 4, source: deaf, description: 'Deaf' },
  { id: 5, source: hello, description: 'Hello' },
  { id: 6, source: man, description: 'Man' },
  { id: 7, source: me, description: 'Me' },
  { id: 8, source: you, description: 'You' },
  { id: 9, source: how, description: 'How are you' },
  { id: 10, source: she, description: 'She'  },
  { id: 11, source: l, description: 'L'  },
  { id: 12, source: n, description: 'N'  },
  { id: 13, source: o, description: 'O'  },
  { id: 14, source: q, description: 'Q'  },
  { id: 15, source: s, description: 'S'  },
  { id: 16, source: t, description: 'T'  },
  { id: 17, source: j, description: 'j'  },
];

function ServVideo() {
  return (
    <div className="serv_video_container">
      <div className="sidenav">
        <div className="sidenav-logo">Services</div>
        <ul className="sidenav-links">
          {/* <li>
            <Link to="/serv"><FaHome /> ML Model</Link>
          </li> */}
          <li>
        <a href="http://localhost:3400/web/indexx.html">
          <FaHome /> Ml model
        </a>
      </li>
          <li>
            <Link to="/sign_video"><FaInfoCircle /> SignVideos</Link>
          </li>
          <li><Link to='/History' > <FaInfoCircle /> History </Link></li>

        </ul>
      </div>
      <div className="video-grid">
        {videoData.map((video) => (
          <div key={video.id} className="video-item">
            <video controls className="video-player">
              <source src={video.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServVideo;
