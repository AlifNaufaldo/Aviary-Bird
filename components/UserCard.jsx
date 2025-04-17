import Image from 'next/image';

export default function UserCard({ user, isMobile }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Image 
          src={user.avatar} 
          width={isMobile ? 40 : 60} 
          height={isMobile ? 40 : 60} 
          alt={user.name} 
          className="rounded-full"
        />
      </div>
      
      <div className="ml-4">
        <h3 className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>{user.name}</h3>
        <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'} mt-1`}>
          {user.role}
        </p>
      </div>
    </div>
  );
}
