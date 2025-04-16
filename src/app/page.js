"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import NewsCard from "@/components/NewsCard";
import UserCard from "@/components/UserCard";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Sample bird watching videos data
  const videos = [
    {
      id: 1,
      location: "Papua - Cenderawasih",
    },
    {
      id: 2,
      location: "Bali - Jalak Bali",
    },
    {
      id: 3,
      location: "Papua - Cenderawasih",
    },
    {
      id: 4,
      location: "Bali - Jalak Bali",
    },
  ];

  // Sample news data
  const news = [
    {
      id: 1,
      title: "Patroli Hutan Terbaru",
      description:
        "Tim kami baru saja menyelesaikan patroli hutan terbaru di Papua",
      image: "https://placehold.co/120x90",
    },
    {
      id: 2,
      title: "Workshop Komunitas",
      description:
        "Bulan depan kami akan mengadakan workshop konservasi dengan masyarakat lokal",
      image: "https://placehold.co/120x90",
    },
    {
      id: 3,
      title: "Komunitas Burung Se-Kabupaten",
      description: "Komunitas baru telah terbentuk di kabupaten kami",
      image: "https://placehold.co/120x90",
    },
    {
      id: 4,
      title: "Pembagian Bibit Tanaman",
      description:
        "Konservasi akan membagikan bibit tanaman untuk mendukung habitat burung",
      image: "https://placehold.co/120x90",
    },
  ];

  // Sample community users data
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Anggota terbaru. Mengikuti patroli hutan di Papua",
      avatar: "https://i.pravatar.cc/60",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Anggota terbaru. Membantu mendirikan stasiun pengamatan burung",
      avatar: "https://i.pravatar.cc/60",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto">
        {/* Main app container */}
        <div
          className={`${isDesktop ? "max-w-6xl mx-auto" : "max-w-md mx-auto"}`}
        >
          {isDesktop ? (
            <DesktopView videos={videos} news={news} users={users} />
          ) : (
            <MobileView videos={videos} news={news} users={users} />
          )}
        </div>
      </div>
    </div>
  );
}

function DesktopView({ videos, news, users }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Header isDesktop={true} />
      <div>
        <HeroSection isDesktop={true} />

        <div className="p-6">
          <SectionTitle title="Pemantauan Populer" viewAllLink="#" className="font-bold" />

          <div className="grid grid-cols-4 gap-4 mb-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <SectionTitle title="Berita Terbaru" viewAllLink="#" />
              <div className="space-y-6">
                {news.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Komunitas" viewAllLink="#" />
              <div className="space-y-4">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileView({ videos, news, users }) {
  return (
    <div className="bg-white">
      <Header isDesktop={false} />
      <HeroSection isDesktop={false} />

      <div className="p-4">
        <SectionTitle
          title="Pemantauan Populer"
          viewAllLink="#"
          isMobile={true}

        />

        <div className="flex overflow-x-auto space-x-4 pb-4 mb-4">
          {videos.slice(0, 2).map((video) => (
            <div key={video.id} className="flex-shrink-0 w-64">
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        <SectionTitle title="Berita Terbaru" viewAllLink="#" isMobile={true} />
        <div className="space-y-4 mb-6">
          {news.slice(0, 2).map((item) => (
            <NewsCard key={item.id} item={item} isMobile={true} />
          ))}
        </div>

        <SectionTitle title="Komunitas" viewAllLink="#" isMobile={true} />
        <div className="space-y-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} isMobile={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
