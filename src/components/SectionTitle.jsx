export default function SectionTitle({ title, viewAllLink, isMobile }) {
    return (
      <div className="flex justify-between items-center mb-4">
        <h2 className={`font-bold ${isMobile ? 'text-base' : 'text-lg'}`}>{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className="text-black text-xs">
            See All
          </a>
        )}
      </div>
    );
  }