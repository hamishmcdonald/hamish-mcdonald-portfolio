import { useState, useEffect } from 'react'

function App() {
  const [isHomePage, setIsHomePage] = useState(true)
  const [isMobileDevice, setIsMobileDevice] = useState(getIsMobileDevice())
  const [modelProgress, setModelProgress] = useState(getModelProgress())
  const [incrementalModelProgress, setIncremmentalModelProgress] = useState(getIncrementalModelProgress())

  function getIsMobileDevice() {
    return window.innerWidth <= 480
  }

  function getModelProgress() {}

  function getIncrementalModelProgress(modelProgress) {
    return '#'.repeat(Math.floor(modelProgress / 5)) + '-'.repeat(20 - Math.ceil(modelProgress / 5))
  }

  function toggleHomePage() {
    setIsHomePage(!isHomePage)
  }

  useEffect(() => {
      const updateDimension = () => {
          setIsMobileDevice(getIsMobileDevice)
      }
      window.addEventListener('resize', updateDimension);
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [isMobileDevice])

  return (
    <>
      {isMobileDevice ?
        <div className='red flex-container'>
          <p className='flex-content'>go to model --&#62;</p>
          <p className='flex-content'>{modelProgress}% of 1.8 trillion stars</p>
        </div>
        :
        <div className='red flex-container'>
          <p className='flex-content'>go to model --&#62;</p>
          <p className='flex-content'>&#91;{incrementalModelProgress}&#93; | {modelProgress}% of 1.8 trillion stars</p>
        </div>
      }

      {isHomePage ?
        <>
        <p onClick={toggleHomePage}>go to model --&#62;</p>

        <img src='ProfilePicture.jpg' id='profile-picture'></img>

        <h1 className='red'>Hamish McDonald - Full-Stack Software Developer</h1>
        <h2 className='red'>Python, Javascript/TypeScript, React</h2>

        {isMobileDevice ?
        <div className='red flex-row'>
        <div className='flex-column'>
          <p className='flex-content'>GitHub --&#62;</p>
          <p className='flex-content'>LinkedIn --&#62;</p>
          <p className='flex-content'>Twitter --&#62;</p>
        </div>
        <div className='flex-column'>
          <p className='flex-content'>Email --&#62;</p>
          <p className='flex-content'>CV --&#62;</p>
        </div>
        </div>
        :
        <div className='red flex-container'>
          <p className='flex-content'>GitHub --&#62;</p>
          <p className='flex-content'>LinkedIn --&#62;</p>
          <p className='flex-content'>Twitter --&#62;</p>
          <p className='flex-content'>Email --&#62;</p>
          <p className='flex-content'>CV --&#62;</p>
        </div>
        }

        <p className='red'>
        I am a passionate junior software developer with a focus on web development. My interests span the entire software 
        development lifecycle, from planning and coding to deployment and operations. Entrepreneurship and value creation are 
        inspiring to me. I am always eager to learn new technologies to optimise my projects and workflow. Overall, I am a 
        hardworking and dedicated software developer who is committed to delivering auspicious results.
        </p>

        <h2>Projects</h2>
        <h3>hamish-mcdonald-portfolio --&#62;</h3>
        <p>A one-pager built with React to showcase my work as a software developer. </p>

        <h3>greek-on-soul --&#62;</h3>
        <p>
        A 5-page website for a restaurant using React, Typescript and Vite. The website includes functionality for making 
        bookings, placing orders, viewing menus, contacting the restaurant, displaying information about the restaurant like 
        its location/staff, and purchasing gift vouchers. I developed abilities in many of the main React paradigms such as 
        React Router DOM, hooks, and components through the course of the project.
        </p>
        <img src='GreekOnSoulWebsite.jpg' className='image-content'></img>
        <p>
        A key aspect of the job was to communicate the process of developing the website to non-technical stakeholders such as 
        the owner, staff, graphic designer and marketing team. My role as software developer required me to coordinate the 
        different stakeholders to ensure the website was finished in a timely manner and to a high standard. Being able to work 
        directly with the customer was one of the most rewarding aspect of the project. In addition, it was highly motivating 
        to know the finished project would provided tangible value to users.  
        </p>

        <h3>galaxy-las --&#62;</h3>
        <p>
        A 3D model of the milky way galaxy, plotting and colourising 1.7 billion stars with data collected from the Gaia space 
        observatory built using python scripts. I built upon my programming skills in many important ways including learning 
        web development, testing, and debugging; understanding network and hardware constraints; software paradigms for 
        modelling 3D geospatial data; some astrophysics; and continuing to develop my understanding of conventional algorithms, 
        data structures and software development best practices.
        </p>

        <h2>Experience</h2>

        <h4>Software Developer at Greek on Soul - Surfers Paradise</h4>
        <p className='tenure'>March 2023 - August 2023</p>
        <ul>
          <li>Developed React programming skills.</li>
          <li>Communicated with non-technical stakeholders.</li>
          <li>Coordinated with different stakeholders to ensure a timely and high-quality project.</li>
        </ul>

        <h4>Software Developer at Euclideon - Fortitude Valley, Milton</h4>
        <p className='tenure'>October 2021 - March 2022</p>
        <ul>
          <li>Built upon programming skills in web development, testing, and debugging.</li>
          <li>Understood network and hardware constraints.</li>
          <li>Learned software paradigms for modelling 3D geospatial data.</li>
          <li>Continued to develop understanding of conventional algorithms, data structures, and software development best 
            practices.</li>
        </ul>

        <h4>Receptionist at YHA Brisbane City - Brisbane CBD</h4>
        <p className='tenure'>October 2022 - Present</p>

        <h4>Team Member at Grill'd Healthy Burgers - Brisbane CBD</h4>
        <p className='tenure'>November 2019 - November 2021</p>
      
        <h4>Food Service Team Member at KFC - Kelvin Grove</h4>
        <p className='tenure'>November 2018 - November 2019</p>
      
        <h2>Academics</h2>

        <h4>Diploma of Information Technology &#40;Front-End Web Development/Back-End Web Development&#41; at TAFE Queensland</h4>
        <p className='tenure'>2022 - 2023</p>

        <h4>Year 12 and Senior Certificate at St. Josephs College Gregory Terrace</h4>
        <p className='tenure'>2017 - 2018</p>

        <h2>Extracurriculars</h2>

        <h4>Premier Touch Westend Touch Rugby League Quater-Finalist</h4>
        <p className='tenure'>2023</p>

        <h4>Premier Touch Bardon Touch Rugby League Semi-Finalist</h4>
        <p className='tenure'>2022</p>

        <h4>UQIC Touch Rugby League Finalist</h4>
        <p className='tenure'>2022</p>

        <h4>GPS Swim Team</h4>
        <p className='tenure'>2017 - 2018</p>
        
        
        </>
        :
        <p onClick={toggleHomePage}>&#60;-- back to home</p>
      }

        <div className='red flex-container'>
          <p className='copyright'>&copy;2023 by Hamish McDonald</p>
          <p>personal referees available upon request</p>
        </div>   
    </>
  )
}

export default App