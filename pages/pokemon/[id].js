/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/details.module.css";

export async function getServerSideProps({ params }) {
  const resp = await fetch(
    `https://h0rhay.github.io/pokemon/pokemon/${params.id}.json`
  );
  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Details({ pokemon }) {
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div className={styles.back}>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </div>
      <article className={styles.layout}>
        <div>
          <img
            className={styles.picture}
            src={`https://h0rhay.github.io/pokemon/${pokemon.image}`}
            alt={pokemon.name}
          />
        </div>
        <div>
          <p className={styles.name}>{pokemon.name}</p>
          {/* <p className={styles.type}>{pokemon.type.join(", ")}</p> */}
        </div>
      </article>
    </>
  );
}
