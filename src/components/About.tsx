import { Code, Palette, Users, Zap } from "lucide-react";


const About=()=> {
 const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building robust applications from frontend to backend with modern technologies."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces that combine aesthetics with functionality."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring lightning-fast applications with optimized code and best practices."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in agile teams to deliver exceptional digital products."
    }
  ];
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design", 
    "Figma", "Tailwind CSS", "Photoshop", "MongoDB", "mySQL"
  ];
  

  return (
    <>
     <h1 className="text-center">About Me</h1> 
     <p className="text-center">
      I'm a passionate developer and designer who loves creating digital experiences that make a difference. With years of experience in modern web technologies, I bring ideas to life through clean code and thoughtful design.
     </p>

     <div className="flex justify-evenly">
      <div className=" w-1/4">
        <h3>my journey</h3>
        <p>Started as a curious developer exploring the endless possibilities of code. Over the years, I've evolved into a full-stack creator who believes in the power of technology to solve real-world problems and create meaningful connections.</p>
        <p>When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers in the community.</p>
      </div>

      <div className="grid grid-cols-2">
        {features.map((feature, index) => (
          <div className="w-1/2" key={index}>
            <div className="flex justify-start items-center">
              <feature.icon/>
            <h3>{feature.title}</h3>
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
     </div>

     <div className="flex justify-center ">
      {skills.map((skill, i) => (
        <div key={i}>
          <p>{skill}</p>

        </div>
      ))}
     </div>
    </>
  )
}

export default About
