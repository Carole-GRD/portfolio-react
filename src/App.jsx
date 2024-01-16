import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import "./App.css";

import parallax from "./assets/images/mainClavier.webp";

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>


    <main>
        <img id="aboutBackgroundImage" src={parallax} alt="Photos de mains sur un clavier d'ordinateur"/>

        <Home />

        <About />


        
        {/* <section id="competence">
            <div class="box-competence">
                <h2>Compétences</h2>
                <div class="container-competence">

                    <div class="card-computer">

                        <div class="webDesign">
                            <div class="centerTextCard">
                                <div class="front">
                                    <h4>Langages</h4>
                                    <img src="iconWebDesign.png" alt="Icone de web design du graphiste ibrandify"/>
                                </div>
                                <div class="back">
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>Javascript</p>
                                    <p>TypeScript</p>
                                    <p>Python</p>
                                </div>
                            </div>
                        </div>

                        <div class="frontEnd">
                            <div class="centerTextCard">
                                <div class="front">
                                    <h4>Frameworks et</h4>
                                    <h4>Bibliothèques</h4>
                                    <img src="iconFrontEnd.png" alt="Icone d'android du graphiste Swifticons"/>
                                </div>
                                <div class="back">
                                    <p>React</p>        
                                    <p>Angular</p>
                                    <p>Tailwindcss</p>
                                    <p>Bootstrap</p>
                                    <p>GreenSock (GSAP)</p>
                                    <p>OpenLayers - Leaflet</p>
                                    <p>Chart.js</p>
                                </div>
                            </div>
                        </div>

                        <div class="BackEnd">
                            <div class="centerTextCard">
                                <div class="front">
                                    <h4>Back-end</h4>
                                    <img src="iconAndroid.png" alt="Icone d'android du graphiste Swifticons"/>
                                </div>
                                <div class="back">
                                    <p>Node.js</p>
                                    <p>Express.js</p>
                                </div>
                            </div>
                        </div>

                        <div class="dataBase">
                            <div class="centerTextCard">
                                <div class="front">
                                    <h4>Database</h4>
                                    <img src="iconDatabase.png" alt="Icone de database du graphiste Smashicons"/>
                                </div>
                                <div class="back">
                                    <p>SQL - MySQL</p>
                                    <p>NoSQL - MongoDB</p>
                                </div>
                            </div>
                        </div>

                        <div class="collaborative">
                            <div class="centerTextCard">
                                <div class="front">
                                    <h4>Collaboratif</h4>
                                    <img src="iconCollaborate.png" alt="Icone de collaboration du graphiste ultimatearm"/>
                                </div>
                                <div class="back">
                                    <p>GitHub</p>
                                    <p>Trello</p>
                                </div>
                            </div>
                        </div>

                        <div class="infrastructure">
                            <div class="centerTextCard">
                                <div class="front">
                                    <h4>Infrastructure</h4>
                                    <img src="iconInfrastructure.png" alt="Icone d'infrastructure du graphiste Eucalyp"/>
                                </div>
                                <div class="back">
                                    <p>Réseaux</p>
                                    <p>Système</p>
                                    <p>Linux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section> */}


        {/* <section id="projects">
            <div class="box-projects">
                <h2>projets</h2>
                
                <div class="inner-projects">

                    <article>
                        <h3>Fruit concept</h3>
                        <a href="fruitConcept.html" target="_blank">
                        <img src="logo.png" alt="Logo 'Fruit Concept' du site réalisé lors de la formation 'Découverte des métiers de l'informtique' d'Interface 3 Namur." id="imageProject01"/></a>
                        <p>Projet collaboratif</p>
                        <p>-</p>
                        <p>Site réalisé lors du projet de fin de formation "Découverte des métiers de l'informatique" de chez IF3N.</p>
                    </article>

                    <article>
                        <h3>Quiz</h3>
                        <a href="quizVolley.html" target="_blank">
                        <img src="quizVolley.jpg" alt="Photo d'un ballon de volley dans un filet" id="imageProject02"/></a>
                        <p>Projet personnel</p>
                        <p>-</p>
                        <p>Quiz réalisé lors de la formation "Développeuse.eur Javascript Full Stack" de chez IF3N.</p>
                    </article>

                    <article>
                        <h3>Todo App</h3>
                        <a href="https://react-intro-lvedfqpcv-caroles-projects.vercel.app/" target="_blank">
                            <img src="a-faire.png" alt="Image de l'application" id="imageProject02"/>
                        </a>
                        <p>Projet personnel</p>
                        <p>-</p>
                        <p>Todo App réalisé pendant ma formation en tant que Développeuse web Frontend chez BeCode, mettant en pratique mes compétences nouvellement acquises en React.</p>
                    </article>

                </div>
            </div>       
        </section> */}


        {/* <section id="contact">
            <div class="box-contact">
                <h2>Contact</h2>
                
                <form action="">
                    <div class="sections">
                        <section class="left">
                            <article>
                                <label for="gender">Mr / Mme / Mlle :</label>
                                <select name="gender" id="gender">
                                    <option value selected="selected" ></option>
                                    <option value="monsieur">Monsieur</option>
                                    <option value="madame">Madame</option>
                                    <option value="mademoilselle">Mademoiselle</option>
                                </select>
                            </article>
                            <article>
                                <label for="lastName">Nom :</label>
                                <input type="text" name="lastName" id="lastName" placeholder="Nom"/>
                            </article>
        
                            <article>
                                <label for="firstName">Prénom :</label>
                                <input type="text" name="firstName" id="firstName" placeholder="Prénom"/>
                            </article>
        
                            <article>
                                <label for="tel">Téléphone :</label>
                                <input type="tel" name="tel" id="tel" placeholder="Téléphone"/>
                            </article>
                        </section>

                        <section class="right">
                            <article>
                                <label for="email">Email :</label>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </article>
        
                            <article>
                                <label for="message">Message :</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                            </article>

                            
                        </section>
                    </div>
                    
                    <input type="submit" name="sendMessage" id="sendMessage" value="Envoyer"/>

                </form>
            </div>   
            


            <div class="contactFooter">
                <p><strong>Dev FullStack JS</strong></p>
                <p><strong>Carole Gérard</strong> &copy;2022</p>
            </div>    
        </section> */}
        
    </main>


    <script src="script.js"></script>
    </>
  )
}

export default App
