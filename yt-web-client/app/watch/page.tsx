'use client';

// import { useSearchParams } from 'next/navigation'

// export default function Watch() {
//   const videoPrefix = 'https://storage.googleapis.com/rahul-yt-processed-videos/';
//   const videoSrc = useSearchParams().get('v');

//   return (
//     <div>
//       <h1>Watch Page</h1>
//       { <video controls src={videoPrefix + videoSrc}/> }
//     </div>
//   );
// }

'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function VideoPlayer() {
  const videoPrefix = 'https://storage.googleapis.com/rahul-yt-processed-videos/';
  const searchParams = useSearchParams();
  const videoSrc = searchParams.get('v');

  if (!videoSrc) {
    return(
            <div>
              <h1>Watch Page</h1>
              { <video controls src={videoPrefix + videoSrc}/> }
            </div>
           );
  }

  return <video controls src={`${videoPrefix}${videoSrc}`} />;
}

export default function Watch() {
  return (
    <div>
      <h1>Watch Page</h1>
      <Suspense fallback={<div>Loading video...</div>}>
        <VideoPlayer />
      </Suspense>
    </div>
  );
}