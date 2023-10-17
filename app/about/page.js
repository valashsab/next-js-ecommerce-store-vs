import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'About us',
  description: 'Find out more about the benefits of matcha.',
};

export default function AboutPage() {
  return (
    <div>
      <section className={styles.aboutSection}>
        <h1>WHY MATCHA?</h1>
        <Image
          src="/images/why_matcha.png"
          alt="image with icons and information about benefits of matcha"
          width={500}
          height={200}
        />
      </section>
      <section className={styles.aboutSection}>
        <h2>Matcha = Healthy green energy</h2>

        <h3>Need a boost? Drink matcha!</h3>
        <p className={styles.contentContainer}>
          Drinking one cup of matcha is roughly the equivalent of drinking 10
          cups of green tea. It’s not jittery like coffee or energy drinks and
          gives you that kick you need while lasting throughout your day. It’s
          also super healthy for you (antioxidants and L-theanine amino acid)!
        </p>
        <Image
          src="/images/caffeine_comparison.png"
          alt="image displaying the lasting effect of caffein compared between matcha and coffee & energy drinks"
          width={500}
          height={200}
        />
      </section>
      <section className={styles.aboutSection}>
        <h2>Hand picked direct from Uji, Japan</h2>
        <Image
          src="/images/uji_map.png"
          alt="image marking the city Uji on a Japan map"
          width={500}
          height={300}
        />
        <p className={styles.contentContainer}>
          We source our very own proprietary blend of Matcha Mafia ceremonial
          grade matcha directly from Uji, Japan, which is home to the oldest and
          most traditional matcha farms in the world. Our matcha is always made
          from freshly ground first harvest green tea leaves. When it comes time
          for harvest the green tea leaves are shaded, picked and sorted by
          quality, de-veined and de-stemmed (to remove bitterness), air dried,
          slow ground into a fine powder, then packaged and sent straight to us
          within days. All this work so you can enjoy the finest quality matcha
          every day!
        </p>
      </section>
      <section className={styles.aboutSection}>
        <h2>Good vs. bad matcha</h2>
        <h3>How can you tell if the quality of your matcha is good?</h3>
        <p>Luckily it’s pretty easy and straightforward.</p>
        <div className={styles.tableContainer}>
          <table className={styles.matchaTable}>
            <thead>
              <tr>
                <th />
                <th>Good Matcha 😀</th>
                <th>Bad Matcha 🫤</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Color</th>
                <td>Vibrant and bright green</td>
                <td>Army green or yellowish</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>€20 - €35 (per 30g)</td>
                <td>Less than €20 (per 30g)</td>
              </tr>
              <tr>
                <th>Taste</th>
                <td>Sweet umami bomb</td>
                <td>Bitter and sharp</td>
              </tr>
              <tr>
                <th>Texture</th>
                <td>Fine, smooth and silky</td>
                <td>Coarse and gritty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
