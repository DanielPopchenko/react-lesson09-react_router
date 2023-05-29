import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Shows.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';

// ! Чтобы достучаться до методов push итд, нужно скачать библиотеку history !

export default function Shows() {
  const [shows, setShows] = useState(JSON.parse(window.localStorage.getItem('shows')));
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name') ?? '';

  const handleChangeQuery = (name) => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    window.localStorage.setItem('shows', JSON.stringify(shows));
  }, [shows]);

  return (
    <div>
      <h1 className={styles.title}>Shows</h1>
      <SearchBox onFormSubmit={handleChangeQuery} setShows={setShows} value={name} />
      {name === '' && <p>These are the most popular films:</p>}
      {shows.length > 0 && (
        <>
          {name !== '' && <p>You searched for: {name}</p>}
          <ul className={styles.showsList}>
            {shows.map((show) => (
              <li className={styles.showCard} key={show.id}>
                <Link
                  className={styles.link}
                  to={{
                    pathname: `${pathname}/${show.id}`,
                  }}
                >
                  {show.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {shows.length === 0 ? <p>Search for films!</p> : null}
    </div>
  );
}
