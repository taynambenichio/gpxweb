import { InstagramLogo, TelegramLogo, TiktokLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react"

function App() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen from-fuchsia-950 via-pink-950 to-zinc-950 bg-gradient-to-b">
      <img src="/images/gpx.png" />
      <h1 className='text-2xl font-normal text-white'>GPX Evolution</h1>
      <p className="font-thin text-white">THE BEST FAKEGPS ON WORLD.</p> <br />
      <div className="flex gap-2 text-white">
        <a target="_blank" href="https://www.instagram.com/fakedojefao/" className="hover:scale-125">
          <InstagramLogo size={46} />
        </a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=447561758433&text=HI%2C%20I%20want%20know%20more%20about%20your%20services!" className="hover:scale-125">
          <WhatsappLogo size={46} />
        </a>
        <a target="_blank" href="https://t.me/fakedojefao" className="hover:scale-125">
          <TelegramLogo size={46} />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@fakedojefao" className="hover:scale-125">
          <TiktokLogo size={46} />
        </a>
        <a target="_blank" href="https://www.youtube.com/@fakedojefao" className="hover:scale-125">
          <YoutubeLogo size={46} />
        </a>
      </div>
    </div>
  )
}

export default App