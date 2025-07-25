// /src/pages/Videos.jsx
import React, { useEffect, useState } from "react";
import "./videos.css";
import { fetchPlaylistsForChannel, fetchVideosByPlaylist } from "../apis/youtubeAPI.js";

const CHANNEL_ID = "YOUR_CHANNEL_ID";
const INITIAL_COUNT = 4;

const Videos = () => {
  const [playlists, setPlaylists] = useState([]);
  const [videosByPlaylist, setVideosByPlaylist] = useState({});
  const [visibleCount, setVisibleCount] = useState({});

  useEffect(() => {
    const load = async () => {
      const fetchedPlaylists = await fetchPlaylistsForChannel(CHANNEL_ID);
      setPlaylists(fetchedPlaylists);

      const videoMap = {};
      const visibleMap = {};

      for (const { id, title } of fetchedPlaylists) {
        const videos = await fetchVideosByPlaylist(id);
        videoMap[title] = videos;
        visibleMap[title] = INITIAL_COUNT;
      }

      setVideosByPlaylist(videoMap);
      setVisibleCount(visibleMap);
    };

    load();
  }, []);

  const handleLoadMore = (title) => {
    setVisibleCount((prev) => ({
      ...prev,
      [title]: prev[title] + INITIAL_COUNT,
    }));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Video Library</h1>
      {playlists.map(({ id, title }) => (
        <div key={id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(videosByPlaylist[title] || [])
              .slice(0, visibleCount[title])
              .map((video) => (
                <div key={video.videoId} className="bg-white shadow rounded-lg overflow-hidden">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-2 font-medium text-sm">{video.title}</div>
                  </a>
                </div>
              ))}
          </div>
          {videosByPlaylist[title] &&
            visibleCount[title] < videosByPlaylist[title].length && (
              <button
                onClick={() => handleLoadMore(title)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Load More
              </button>
            )}
        </div>
      ))}
    </div>
  );
};

export default Videos;
