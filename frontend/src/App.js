import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [obstacle_avoiding_robot, set_obstacle_avoiding_robot] = useState([]);
  const [magic_mirror, set_magic_mirror] = useState([]);
  const [connect_4, set_connect_4] = useState([]);
  const [project1_switch, set_project1_switch] = useState([]);
  const [project2_switch, set_project2_switch] = useState([]);
  const [project3_switch, set_project3_switch] = useState([]);
  const [contact, set_contact] = useState([]);
  const [contact_switch, set_contact_switch] = useState([]);





  return (
    <div className="App">
      <div className='title'>
        <h1>J</h1>
      </div>

      <div className='topnav'>
        <button className='button'
          onClick={(e) => { set_contact_switch(true) }}>Home</button>
        <button className='button'
          onClick={(e) => { set_contact_switch(false); set_contact(false); }}>Contact</button>
      </div>

      <div>

        {contact_switch && (

          <div>

            <div className='display-1'>
              <div className='display-1-text'>
                <p>About Me </p>
                <div className='about-me'>
                  <p>Jonathan Duron</p>
                  <p>University: Iowa State university</p>
                  <p>Exprected Graduation: 2025</p>
                  <p>Major: Software Engineering</p>
                </div>

              </div>


              <div className='self_image_container'>
                <img width="500" height="500" src={require('./images/self_image.jpeg')} />
              </div>

            </div>


            <div className='display-2'>
              <div className='tech-skills-container'>
                <p>Tech Skills</p>

                <div className='tech-skills-text'>
                  <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>Javascript</li>
                    <li>Data structures</li>
                  </ul>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Git</li>
                    <li>Mongodb</li>

                  </ul>
                  <div className='tech_image_container'>
                    <img width="200" height="200" src={require('./images/tech_image.jpeg')} />
                  </div>

                </div>

              </div>

              <div className='professional-skills-container'>
                <p>Professional Experience</p>
                <div className='professional-skills-text'>
                  <p>Stomping Grounds, Server, Ames, IA August 2022-Present</p>
                  <li>Responsible for taking customer orders and ensuring customer satisfaction</li>
                  <li>Built and maintained customer relationships</li>
                  <li>Verbal and written communication skills</li>

                </div>

              </div>


            </div>

            <div className='blog-post'>
              <div className='title'>
                  <p>Wednesday, May 31st 2023</p>
              </div>
              <div className='blog-text'>
                  <div className='title'>
                    <h3>What I'm Working On</h3>
                  </div>

                  <div className='text'>
                      <p>I am getting ready to finish up my website and have it uploaded to the internet. I am also working on updating my website to make it
                         more presentable and modern. I'm not quite sure how I will upload it to the internet quite yet, that is something I still have to learn.
                         I am thinking of using github to upload it but have to do more research into that. 
                      </p>
                  </div>

                  <div className='title'>
                      <h3>Future Projects</h3>
                  </div>

                  <div className='text'>
                      <p>One project I want to work on this summer is to build a website for my Mom's small business. She rents out throne chairs and photo booths.
                         In her business her main audience are parties and quinceañera's, and my plan is too create a website using react, or maybe some other framework
                         like Angular because why not learn something new. I plan on making a website where customers are able to see what my Mom has in her inventory and
                         schedule dates they would want to reserve my Mom's products.
                      </p>
                  </div>

              </div>

            </div>



            <div className='project-container'>

              <p>Projects</p>
              <div className='project-container-alignment'>
                {/* This will be running always because no button has been touched */}
                {obstacle_avoiding_robot && (

                  <div className='obstacle-avoiding-robot-container'>
                    <div className='project-image'>
                      <img width="350" height="320" src={require('./images/obstacle_avoiding_robot_image.jpeg')} />
                    </div>



                    <div className='project-title'>
                      <p>Obstacle Avoiding Robot</p>
                    </div>

                    <div className='project-text'>
                      <p>Objective: Design a robot that avoids obstacles</p>

                    </div>

                    <div>
                      <button className='show_more_button' checked={obstacle_avoiding_robot}
                        onClick={(e) => { set_obstacle_avoiding_robot(!obstacle_avoiding_robot); set_magic_mirror(false); set_connect_4(false); set_project1_switch(true); set_project2_switch(false); set_project3_switch(false); }}>
                        Show More</button>
                    </div>

                  </div>
                )}
                {/* This will run only if the button for the project of the robot is hit, should show more details of the robot */}
                {!obstacle_avoiding_robot && project1_switch && (
                  <div>

                    <div className='show_more_container'>
                      <h1>Obstacle Avoiding Robot (July 2022)</h1>
                      <div className='project-container-OAR'>
                        <div className='project-text-obstacle'>
                          <ul>
                            <li>Designed and 3D designed each part of the robot to scale</li>
                            <li>Successfully Constructed, soldered, and wired the robot together</li>
                            <li>Developed a program that uses sensors, motors, and an Arduino board to avoid obstacles in its path</li>
                            <li>Successfully tweaked the program and wiring until the robot operated correctly</li>
                          </ul>
                        </div>


                        <div className='project-image-OAR'>

                          <img width="250" height="230" src={require('./images/obstacle_avoiding_robot_program.jpeg')} />
                        </div>

                        <div className='project-image-OAR'>
                          <img width="250" height="230" src={require('./images/OAR_image1.jpeg')} />
                        </div>


                      </div>
                    </div>

                    <button className=' show_more_button' checked={obstacle_avoiding_robot}
                      onClick={(e) => { set_obstacle_avoiding_robot(true); set_connect_4(true); set_magic_mirror(true); set_project1_switch(false) }}>
                      Show Less</button>
                  </div>

                )}


                {magic_mirror && (
                  <div className='Magic-Mirror-Containter'>
                    <div className='project-image'>
                      <img width="350" height="320" src={require('./images/magic_mirror.jpeg')} />
                    </div>

                    <div className='project-title'>
                      <p>Magic mirror</p>
                    </div>

                    <div className='project-text'>
                      <p>Objective: Build a mirror that tells time and latest news</p>
                    </div>

                    <div>
                      <button className='show_more_button' checked={magic_mirror}
                        onClick={(e) => { set_magic_mirror(!magic_mirror); set_connect_4(false); set_obstacle_avoiding_robot(false); set_project2_switch(true); set_project1_switch(false); set_project3_switch(false); }}>
                        Show More</button>
                    </div>

                  </div>

                )}

                {!magic_mirror && project2_switch && (
                  <div>
                    <div className='show_more_container'>
                      <h1>Magic Mirror (December 2022)</h1>
                      <div className='project-container-mm'>
                        <div className='project-text-obstacle'>
                          <ul>
                            <li> Designed and built a custom magic mirror display using a Raspberry Pi</li>
                            <li>Implanted custom functionality using Python, including weather updates, calendar events, and personalized greetings</li>
                          </ul>
                        </div>

                        <div className='project-image-mm'>

                          <img width="250" height="230" src={require('./images/raspberry_pi.jpeg')} />
                        </div>

                        <div className='project-image-OAR'>
                          <img width="250" height="230" src={require('./images/mm_image1.jpeg')} />
                        </div>

                      </div>

                    </div>

                    <button className='show_more_button' checked={magic_mirror}
                      onClick={(e) => { set_magic_mirror(true); set_obstacle_avoiding_robot(true); set_connect_4(true); set_project2_switch(false) }}>
                      Show Less</button>
                  </div>

                )}

                {connect_4 && (
                  <div className='Connect-4-container'>
                    <div className='project-image'>
                      <img width="350" height="320" src={require('./images/connect-4_image.jpeg')} />

                    </div>

                    <div className='project-title'>
                      <p>Connect-4</p>
                    </div>

                    <div className='project-text'>
                      <p>Objective: Implemented a simple Connect-4 game using ncurses</p>
                    </div>

                    <div>
                      <button className='show_more_button' checked={connect_4}
                        onClick={(e) => { set_connect_4(!connect_4); set_magic_mirror(false); set_obstacle_avoiding_robot(false); set_project3_switch(true); set_project1_switch(false); set_project2_switch(false); }}>
                        Show More</button>
                    </div>

                  </div>
                )}

                {!connect_4 && project3_switch && (
                  <div>
                    <div className='show_more_container'>
                      <h1>Connect-4 (April 2023)</h1>
                      <div className='project-container-mm'>
                        <div className='project-text-obstacle'>
                          <ul>
                            <li>Developed and implemented a Connect 4 game using the C programming language and the ncurses library.</li>
                            <li>Utilized C language concepts such as data structures, functions, and loops to create the game logic and mechanics.</li>
                            <li>Implemented the graphical user interface (GUI) using ncurses to provide an interactive and user-friendly experience.</li>
                          </ul>
                        </div>

                        <div className='project-image-mm'>

                          <img width="350" height="320" src={require('./images/c4_image1.jpeg')} />
                        </div>

                      </div>
                    </div>
                    <button className='show_more_button' checked={connect_4}
                      onClick={(e) => { set_connect_4(!connect_4); set_magic_mirror(true); set_obstacle_avoiding_robot(true); set_project3_switch(false) }}>
                      Show Less</button>
                  </div>

                )}


              </div>

            </div>

          </div>
        )
        }
      </div>

      <div>
        {!contact_switch && (
          <div className='contact-container'>
            <div className='contact'>
              <h1>Contact</h1>
              <hr></hr>

              <div className='info'>
                <p>Thanks for taking the time to read my blog. I am a Jr. at Iowa State University, majoring in Software Engineering.
                  I am currently employed as an intern for a company manafacture called Titan Tires, and my role there is create an internal
                  website to help the design process to be faster and effecient. <br></br>
                  I completely made this website from scratch with my own skills that I learned from the classes I have taken and some help from
                  the internet. I have a passion for programming and constantly looking for diffent oppurtunities, if you are interested in my work
                  feel free to contact me.
                </p>
              </div>

              <div className='contact-me'>
                <div className='socials'>
                  <h3>Email</h3>

                  <div className='git'>
                    <h3>GitHub</h3>
                  </div>

                  <div className='git'>
                    <h3>Linkedin</h3>
                  </div>

                </div>

                <div className='usernames'>
                  <div className='align'>
                  
                  <div className='mail'>
                    <div className='line'>
                    <hr></hr>
                    </div>
                    <p>duron.jonathan27@gmail.com</p>
                  </div>

                  <div className='github'>
                    <div className='line'>
                    <hr></hr>

                    </div>
                    
                    <div className='github-user'>
                    <p>jduron24</p>

                    </div>

                  </div>

                  <div className='linkedin'>
                    <div className='line'>
                    <hr></hr>

                    </div>
                    
                    <div className='linkedin-user'>
                    <p>Jonathanduron25</p>
                    
                    </div>

                  </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        )}


      </div>

      <div className='footer'>
        <p>Created by: Jonathan Duron</p>
      </div>

    </div>
  );
}
// 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
export default App;