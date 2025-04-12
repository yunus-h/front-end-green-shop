
import styles from './Landing.module.css';
import Logotype from '../../assets/images/greenshop_logo.png';

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <h2>Please Login or Register if you don't have an account on Green Shop</h2>
        <section className={styles.splash}>
          <img src={Logotype} alt='greenshop' />
        </section>

        <section className={styles.about}>
          <header>
            <h3>What's in the pot?</h3>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
                Welcome to Green Shop — the internet's leafy little hangout for houseplant lovers, plant whisperers, and dirt-under-their-fingernails champions. 🌱💚
            </p>
            <p>
                We're not just another online plant store. Oh no.
            </p>
            <p>
                We're a plant-powered matchmaking service, bringing together passionate plant people with gorgeous, adoptable greenery from local individual sellers. It's basically Tinder… but for pothos.
            </p>
            <p>
                On Green Shop, you can:
            </p>
            <ul>
                <li>
                    🌿 Buy beautiful live houseplants that scream "Look at me, I photosynthesize!"
                </li>
                <li>
                    ✂️ Sell your glorious cuttings, seedlings, or that one spider plant that had babies like it's 1999
                </li>
                <li>
                   🌾 Browse for seeds to grow your own leafy empire
                </li>
                <li>
                  🪴 Accessorize with the trendiest pots, misters, and mini rakes you didn't know you needed
                </li>
            </ul>
            <p>
                Whether you're a casual plant parent or a full-blown chlorophyll addict, there's something here for you.
            </p>

          </article>
        </section>

        <section className={styles.testimonial}>
          <header>
            <h3>What the stars are saying?</h3>
            <h1>TESTIMONIALS</h1>
          </header>
          <article>
            <header>
              <h4>Leonardo DiCaprio</h4>
              <p>Environmental Icon & Occasional Actor</p>
            </header>
            <p>
              I got a monstera from Green Shop and now I talk to it more than I talk to my agent. It listens better, too.
            </p>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 GREEN SHOP INC. GREEN RIGHTS RESERVED
      </footer>
    </>
  );
};

export default Landing;
