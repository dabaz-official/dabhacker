import Link from 'next/link';

const Music = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[url(/images/pattern-white.jpg)] pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-black">
          <h2 className="text-5xl sm:text-7xl font-sans">
            Music
          </h2>
          <p className="mt-4 text-lg font-medium bg-white sm:text-xl/8 font-mono">
            I dive into the rhythm of the streets, crafting beats and rhymes with raw energy, using tools like <Link href="https://www.image-line.com" target="_blank" className="underline bg-black text-[#bee54b]">FL Studio</Link> & <Link href="https://www.apple.com/logic-pro" target="_blank" className="underline bg-black text-[#bee54b]">Logic Pro</Link> to shape the soundscape of the urban night.
          </p>
          <p className="mt-8 text-md bg-white sm:text-lg/8 font-mono">
            Since 2017, I&apos;ve been spitting bars & notes that echo the grit of the city and the heart of my story—tracks like Athanasia hit deep, a tribute to my mom. From freestyles like Skrt Freestyle to soulful anthems, I blend hip-hop&apos;s pulse with personal truths, turning late-night vibes into sonic hacks that resonate. I&apos;m always chasing the next beat to make your soul move. Check out my music to learn more (click "Enter").
          </p>
        </div>
        <div className="flex justify-end -mt-4">
          <Link href="https://music.dabaz.me" target="_blank" className="">
            <img src="/images/chatter-teeth.png" alt="Enter music.dabaz.me" className="w-64 object-cover" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Music;