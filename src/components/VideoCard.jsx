export default function VideoCard({ video }) {
  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/(?:www\.)?youtu\.be\/|(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/]+\/\S+\/|\S*\?v=)))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };


  const videoId = extractVideoId('https://youtu.be/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW');

  return (
    <div className="relative rounded-lg overflow-hidden group">

      {/* Embed YouTube Video */}
      {videoId && (
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.location}
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      )}

      <div className="mt-2">
        <h3 className="text-sm font-bold">{video.location}</h3>
        <p className="text-gray-500 text-xs flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 
          <span>Sedang Live</span> 
        </p>
      </div>
    </div>
  );
}
