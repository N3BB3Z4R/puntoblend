import React from 'react';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import './YoutubeLister.css'

const YoutubeLister = () => {

  const videos = [
    'TjTE3cP4F34', // Presentacion Addon RBD Lab Simulation Tool
    'bDqoDxB_pK0', // MasterClass Introduccion a Geometry Nodes
    'itHy9kNaSS8', // Curso HardSurface
    'KpKCT9ec_LU', // MasterClass Blender Composition vs After Effects
    'ytgyT2NSCrU', // Curso Blender & WebXR
    'F9G96kFWnCU', // Curso Substance Painter
    'B_gX0wtjHCs', // Curso Modificadores Blender 
    'ojU2FKH5EUU', // Curso Workflow Booleans
    'yzxWchcmlZQ', // Charlas The Workshop    
  ]

  return (
    <div className='YoutubeLister-container'>
      {videos.map(video => (
        <YoutubeEmbed className="YoutubeLister-video" embedId={video}/>
      ))}
    </div>
  );
};

export default YoutubeLister;