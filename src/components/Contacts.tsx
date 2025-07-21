import { Mail, MapPin, Phone } from "lucide-react"


const Contacts = () => {
  return (
    <>
      <h1 className="text-center">Lets work together</h1>
      <span className="flex justify-center">
        Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. Let's create something amazing together.
      </span>
      <div className="flex justify-center gap-2 ">
        <div className="w-1/2">
          <h3>Send a Message</h3>
          <form action="P0ST">
            <div className="flex justify-between">
              <div className="grid">
              <span>first name</span>
              <input type="text" name="first-name" id="first-name" placeholder="first name" />
            </div>
            <div>
              <span className="grid">last name</span>
              <input type="text" name="last-name" id="last-name" placeholder="last name" />
            </div>
            </div>

            <div className="flex justify-between">
              <div>
              <span className="grid ">email</span>
              <input type="email" name="email" id="email" placeholder="email" />
            </div>
             <div>
              <span className="grid">subject</span>
              <input type="subject" name="subject" id="subject" placeholder="subject" />
            </div>
            </div>
            <div>
              <span className="grid ">message</span>
              <textarea className="w-full" name="message" id="message" placeholder="tell me about your project idea"></textarea>
            </div>
          </form>
          <button className="w-full">
            <span>send message</span>
          </button>
        </div>

       <div className="w-1/2">
        <h2>get in touch</h2>
        <p>I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and design. Don't hesitate to reach out!</p>
        <div>
          <div className="flex items-center">
            <Mail/>
            <div>
              <p>email</p>
              <p>ciiradev@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <Phone/>
            <div>
              <p>Phone</p>
              <p>+254 722 530 597</p>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin/>
            <div>
              <p>Location</p>
              <p>Nairobi, KE</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Available for freelance</h3>
          <p>I'm currently available for new projects and collaborations. Let's discuss how we can work together.</p>
          <button>
            <p>Schedule a call</p>
          </button>
        </div>
      </div> 
      </div>
      
    </>
  )
}

export default Contacts
