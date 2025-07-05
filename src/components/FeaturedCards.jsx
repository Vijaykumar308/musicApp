import { Play } from "lucide-react";
import { useEffect, useRef } from "react";

const FeaturedCard = ({ project, activeVideoId, setActiveVideoId }) => {
  const iframeRef = useRef(null);
  const videoId = extractYouTubeId(project.videoUrl);
  const isActive = activeVideoId === project.id;

  useEffect(() => {
    // Stop iframe playback by resetting the src when inactive
    if (!isActive && iframeRef.current) {
      iframeRef.current.src = "";
    }
  }, [isActive]);

  function extractYouTubeId(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url?.match(regex);
    return match ? match[1] : null;
  }

  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : project.image;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        {!isActive ? (
          <>
            <img
              src={thumbnail || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {videoId && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setActiveVideoId(project.id)}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <Play className="w-6 h-6 ml-1 cursor-pointer" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-48">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={project.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
        <span className="inline-block px-3 py-1 bg-gray-700 text-xs rounded-full">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;
