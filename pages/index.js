/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/homestyle.module.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://h0rhay.github.io/pokemon/pokemon-index.json"
      );
      setPokemon(await resp.json());
    }
    getPokemon();
  }, []);
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
