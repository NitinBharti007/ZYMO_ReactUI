import React from "react";

const YouTubeVideo = () => {
  return (
    <div className="flex flex-col items-center min-h-100 bg-white">
      <h1 className="text-5xl font-bold mb-8">YouTube Video</h1>
      <div className="relative w-full max-w-2xl">
        <iframe
          className="w-full h-96 rounded-3xl"
          src="https://www.youtube.com/embed/vB-uRlc6diQ?si=osveDpdEnSC_JBJQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
