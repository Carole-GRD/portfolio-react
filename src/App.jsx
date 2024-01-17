import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Competences from "./components/Competences/Competences";
import Projects from "./components/Projects/Projects";

import "./App.css";

import parallax from "./assets/images/about/mainClavier.webp";

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

        <Competences />
        
        <Projects />




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
