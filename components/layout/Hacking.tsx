const Hacking = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="relative isolate overflow-hidden bg-black pb-8 sm:pb-16">
        <div className="relative isolate overflow-hidden bg-[url(/images/blacknoise.png)] bg-center bg-no-repeat bg-cover pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-5xl text-white sm:text-7xl font-sans">
              Hacking
            </h2>
            <p className="mt-4 text-lg font-medium text-neutral-200 sm:text-xl/8 font-mono">
              I prowl the web&apos;s underbelly, exposing vulnerabilities with razor-sharp precision, wielding tools like Burp Suite to secure the digital frontier.
            </p>
            <p className="mt-8 text-md text-neutral-200 sm:text-lg/8 font-mono">
              Since 2019, I&apos;ve been diving into the dark corners of Web security, cracking open systems to expose their weaknesses—always ethically, always for the greater good. My toolkit? Burp Suite for dissecting HTTP traffic, custom scripts for poking at APIs, and a relentless drive to outsmart the bad guys. Picture this: I once uncovered a critical XSS flaw on a high-traffic site, patching it before it could wreak havoc—think of it as defusing a digital bomb. Now, I&apos;m diving into Web3 security, decoding blockchain vulnerabilities to prep for the decentralized future. By 2025, I&apos;m aiming to blend my hacking chops with remote Web3 dev work, building systems as secure as they are slick.
            </p>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-[url(/images/pattern-white.jpg)] pb-0.25">
        <img src="/images/paper-cut.png" alt="paper-cut" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Hacking;