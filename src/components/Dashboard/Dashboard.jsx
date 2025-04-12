import { useEffect, useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

import * as userService from '../../services/userService';
import styles from "./Dashboard.module.css"

const Dashboard = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        console.log(fetchedUsers);
      } catch (err) {
        console.log(err)
      }
    }
    if (user) fetchUsers();
  }, [user]);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.greeting}>
          <header>
            <h1>Welcome, {user.name}</h1>
            <hr />
            <h2>I hope you are doing well!</h2>
          </header>

          <article>
            <h3>🌿 Green Shop - Where Plants Meet Their People 💚</h3>
        
            <p>Tired of staring at your beige walls wondering why your life lacks flavor and foliage? Fear not, plant lover, because Green Shop is here to leaf you breathless. (Yeah, we went there.)</p>
            <br />

            <p>We're the chillest online jungle on the block - a leafy little corner of the internet where local plant wizards (aka individual sellers) offer up their freshest and most fabulous green babies:</p>

            <p>🪴 Live plants (from drama queens like fiddle leaf figs to the chill succulents who ghost water for weeks)</p>
            <p>🌱 Seedlings & cuttings (the Tinder of the plant world—just swipe, root, and grow)</p>
            <p>🌾 Seeds (because you like your commitment level just right)</p>
            <p>🧤 Plant accessories (pots, mist-ifiers, tiny trowels that make you feel powerful)
            And more planty goodness than you can shake a watering can at.</p>
            <p>🌍 Support local. Grow global. Every purchase helps small sellers and indie plant parents keep doing their thing—growing beauty from their backyards to your windowsill.</p>
            <br />
            <p>So go ahead, turn your apartment into a jungle, your office into a zen garden, and your bathroom into a rainforest retreat. You deserve it. Your vibe deserves it. Your air quality definitely deserves it.</p>
            <br />
            <p>🌱 Green Shop - Fresh, fly, and photosynthesizing daily.</p>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 GREEN SHOP INC. GREEN RIGHTS RESERVED
      </footer>
    </>
  );
};

export default Dashboard;