// /src/api/youtubeApi.js
const API_KEY = "YOUR_YOUTUBE_API_KEY";

// Get all playlists from a channel
export const fetchPlaylistsForChannel = async (channelId) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items?.map((item) => ({
    id: item.id,
    title: item.snippet.title,
  })) || [];
};

// Get all videos from a playlist
export const fetchVideosByPlaylist = async (playlistId) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items?.map((item) => ({
    videoId: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails?.medium?.url,
  })) || [];
};
