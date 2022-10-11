/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/homestyle.module.css";

export async function getServerSideProps() {
  const resp = await fetch(
    "https://h0rhay.github.io/pokemon/pokemon-index.json"
  );
  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Home({ pokemon }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon explorer</title>
        <meta name="description" content="pokemon explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.grid}>
        {pokemon &&
          pokemon.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <a>
                  <img
                    src={`https://h0rhay.github.io/pokemon/${pokemon.image}`}
                    alt={pokemon.name}
                  />
                </a>
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
}
