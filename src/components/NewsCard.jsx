import Image from 'next/image';

export default function NewsCard({ item, isMobile }) {
  return (
    <div className={`flex ${isMobile ? 'items-start' : 'items-center'}`}>
      <div className="flex-shrink-0">
        <Image 
          src={item.image} 
          width={isMobile ? 80 : 120} 
          height={isMobile ? 60 : 90} 
          alt={item.title} 
          className="rounded"
        />
      </div>
      
      <div className="ml-4">  
        <h3 className={`font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>{item.title}</h3>
        <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'} mt-1`}>
          {item.description}
        </p>
      </div>
    </div>
  );
}