export default function HeroSection({ isDesktop }) {
  return (
    <div
      className={`
        relative
        w-full 
        bg-center bg-cover bg-no-repeat 
        ${isDesktop ? "pt-[66px]" : "pt-[108px]"} 
        h-[487px] 
        flex items-end
      `}
      style={{
        backgroundImage: `url(${
          isDesktop ? "/hero-desktop.jpeg" : "/hero-mobile.jpeg"
        })`,
        backgroundSize: 'cover',
      }}
    >
      {/* Gradient hanya setengah bawah */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white/100 to-transparent z-0 pointer-events-none" />

      {/* Konten di atas gradient */}
      <div
        className={`relative z-10 mt-[310px] md:mt-[320px] 
              max-w-[390px] md:max-w-[1307px] 
              py-2 px-4 md:px-8 
              flex flex-col gap-2`}
      >
        <h1 className="font-serif font-bold text-[32px] md:text-[64px] leading-[120%] tracking-normal text-black">
          Selamat Datang di Konservasi Burung
        </h1>

        <p className="text-sm md:text-lg text-black">
          Kami berkomitmen untuk melindungi burung yang terancam punah dari
          habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.
        </p>
      </div>
    </div>
  );
}
