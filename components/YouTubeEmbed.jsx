export default function YouTubeEmbed() {
    return (
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW"
          title="Bird Conservation Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      </div>
    );
  }