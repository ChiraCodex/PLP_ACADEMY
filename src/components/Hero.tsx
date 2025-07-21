import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"


function Hero() {
  return (
   <>
    <div className="flex flex-col justify-center">
      <h1 className="text-center">Creative Portfolio</h1>
      <span className="flex justify-center">Crafting Software solutions with passion, precision and a touch of creative magic</span>
    </div>

    <div className="flex flex-col justify-center items-center">
      <button>
        <span>view my projects</span>
      </button>
      <button>
        <span>download my resume</span>
      </button>
    </div>

    <div className="flex justify-center">
      <GithubIcon/>
      <LinkedinIcon/>
      <Mail/>
    </div>
   </>
  )
}

export default Hero
