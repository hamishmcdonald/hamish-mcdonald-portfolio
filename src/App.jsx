import { useState, useEffect } from 'react'

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(getIsMobileDevice())

  function getIsMobileDevice() {
    return window.innerWidth <= 480
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
        <img src='ProfilePicture.jpg' id='profile-picture'></img>

        <h1 className='red'>Hamish McDonald - Full-Stack Software Developer</h1>
        <h2 className='red'>Python, Javascript/TypeScript, React</h2>

        {isMobileDevice ?
          <div className='flex-row'>
            <div className='flex-column'>
              <a href='https://www.github.com/hamishmcdonald' target='_blank'>
                <p className='red flex-content'>GitHub --&#62;</p>
              </a>
              <a href='https://www.linkedin.com/in/hamish-mcdonald-905913228' target='_blank'>
                <p className='red flex-content'>LinkedIn --&#62;</p>
              </a>
              <a href='https://www.twitter.com/hwmcdonalddev' target='_blank'>
                <p className='red flex-content'>X --&#62;</p>
              </a>
            </div>
            <div className='flex-column'>
              <a href='mailto:hamishwmcd@gmail.com' target='_blank'>
                <p className='red flex-content'>Email --&#62;</p>
              </a>
              <a href='tel:+61 401 086 530' target='_blank'>
                <p className='red flex-content'>Phone --&#62;</p>
              </a>
              <a href='./resume-of-hamish-mcdonald.pdf' target='_blank'>
                <p className='red flex-content'>Resume --&#62;</p>
              </a>
            </div>
          </div>
          :
          <div className='flex-container'>
            <a href='https://www.github.com/hamishmcdonald' target='_blank'>
              <p className='red flex-content'>GitHub --&#62;</p>
            </a>
            <a href='https://www.linkedin.com/in/hamish-mcdonald-905913228' target='_blank'>
              <p className='red flex-content'>LinkedIn --&#62;</p>
            </a>
            <a href='https://www.twitter.com/hwmcdonalddev' target='_blank'>
              <p className='red flex-content'>X --&#62;</p>
            </a>
            <a href='mailto:hamishwmcd@gmail.com' target='_blank'>
              <p className='red flex-content'>Email --&#62;</p>
            </a>
            <a href='tel:+61 401 086 530' target='_blank'>
                <p className='red flex-content'>Phone --&#62;</p>
            </a>
            <a href='./resume-of-hamish-mcdonald.pdf' target='_blank'>
              <p className='red flex-content'>Resume --&#62;</p>
            </a>
          </div>
        }

        <p className='red'>
        I am a passionate junior software developer with a focus on web development. My interests span the entire software 
        development lifecycle, from planning and coding to deployment and operations. Entrepreneurship and value creation are 
        inspiring to me. I am always eager to learn new technologies to optimise my projects and workflow. Overall, I am a 
        hardworking and dedicated software developer who is committed to delivering auspicious results.
        </p>

        <h2>Projects</h2>
        <a href='https://www.github.com/hamishmcdonald/hamish-mcdonald-portfolio' target='_blank'>
          <h3>hamish-mcdonald-portfolio --&#62;</h3>
        </a>
        <p>
        A one-pager built with React to showcase my work as a software developer. The websites only functions are to display 
        my work thus far in my career as a software developer and provide ways for other software developers and prospective 
        employers to contact me. As my repertoire of skills and projects grow the complexity of this website and its feature 
        set will grow with it. 
        </p>
        <a href='https://www.greekonsoul.au' target='_blank'>
          <h3>greek-on-soul --&#62;</h3>
        </a>
        <p>
        A 5-page website for a restaurant built using React, Typescript and Vite. The website includes functionality for 
        making bookings, placing orders, viewing menus, contacting the restaurant, displaying information about the 
        restaurant like its location/staff, and purchasing gift vouchers. I developed abilities in many of the main React 
        paradigms such as React Router DOM, hooks, and components through the course of the project.
        </p>
        <img src='GreekOnSoulWebsite.jpg' className='image-content'></img>
        <p>
        A key aspect of the job was to communicate the process of developing the website to non-technical stakeholders such as 
        the owner, staff, graphic designer and marketing team. My role as software developer required me to coordinate the 
        different stakeholders to ensure the website was finished in a timely manner and to a high standard. Being able to work 
        directly with the customer was one of the most rewarding aspect of the project. In addition, it was highly motivating 
        to know the finished project would provided tangible value to users.  
        </p>

        <a href='https://www.github.com/hamishmcdonald/galaxy-las' target='_blank'>
          <h3>galaxy-las --&#62;</h3>
        </a>
        <p>
        A 3D model of the milky way galaxy, plotting and colourising 1.7 billion stars with data collected from the Gaia space 
        observatory built using python scripts. In order to complete the project I had to research many concepts from astrophysics 
        and implement them as code. Each stars temperature and cartesian coordinates are calcuated using the four following 
        formulas:
        </p>
        
        <center>X = <sup>cos(b)cos(l)</sup>/<sub>parallax</sub></center>
        <center>Y = <sup>cos(b)sin(l)</sup>/<sub>parallax</sub></center>
        <center>Z = <sup>sin(b)</sup>/<sub>parallax</sub></center>
        <center>T = <sup>2.8977719 nm K</sup>/<sub>&lambda;<sub>max</sub></sub></center>

        <p>
        The first 3 formulas are used to calculate the stars X, Y and Z coordinates from parallax, galactic latitude and longitude. 
        The fourth formula is Wein's law which describes the relationship between the emission spectrum of a black body and its 
        temperature. This temperature is then used to determine an approximate colour of the star using polynomials I derived 
        from the CIE 1931 colour space.
        </p>

        <h2>Experience</h2>

        <h4>Contract Web Developer at Greek on Soul - Surfers Paradise</h4>
        <p className='tenure'>March 2023 - August 2023 (6 months)</p>
        <ul>
          <li>React.js & Bootstrap</li>
          <li>Typescript</li>
          <li>Search Engine Optimization</li>
          <li>Azure Static Site & Content Delivery Network</li>
          <li>Git & GitHub</li>
        </ul>

        <h4>Intern Software Developer at Euclideon - Fortitude Valley, Milton</h4>
        <p className='tenure'>October 2021 - March 2022 (6 months)</p>
        <ul>
          <li>Network & Hardware Constraints</li>
          <li>3D Geospatial Modelling Paradigms (LiDAR)</li>
          <li>Agile Development Methodologies & Azure DevOps</li>
          <li>Azure App Services</li>
          <li>C# & .NET</li>
        </ul>

        <h4>Receptionist at YHA Brisbane City - Brisbane CBD</h4>
        <p className='tenure'>October 2022 - Present</p>

        <h4>Team Member at Grill'd Healthy Burgers - Brisbane CBD</h4>
        <p className='tenure'>November 2019 - November 2021 (24 months)</p>
      
        <h4>Food Service Team Member at KFC - Kelvin Grove</h4>
        <p className='tenure'>November 2018 - November 2019 (12 months)</p>
      
        <h2>Academics</h2>

        <h4>Diploma of Information Technology &#40;Front-End Web Development/Back-End Web Development&#41; at TAFE Queensland</h4>
        <p className='tenure'>2022 - 2024</p>

        <h4>Year 12 and Senior Certificate at St. Josephs College Gregory Terrace</h4>
        <p className='tenure'>2017 - 2018</p>

        <h2>Extracurriculars</h2>

        <h4>Premier Touch Westend Touch Rugby League Quater-Finalist</h4>
        <p className='tenure'>2023</p>

        <h4>UQIC Touch Rugby League Finalist</h4>
        <p className='tenure'>2022</p>

        <h4>GPS Swim Team</h4>
        <p className='tenure'>2017 - 2018</p>

        <p className='red copyright'>&copy;2024 by Hamish McDonald</p>
      </> 
  )
}

export default App