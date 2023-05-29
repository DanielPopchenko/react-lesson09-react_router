import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShowDetails } from '../../services/filmsAPI';
import styles from './ShowDetails.module.css';

export default function ShowDetails() {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  // ! navigate - функция, которая позволяет вернуться назад по истории
  const navigate = useNavigate();

  useEffect(() => {
    fetchShowDetails(id).then((show) => setShow(show));
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.div}>
      <button type="button" className={styles.goBackBtn} onClick={handleGoBack}>
        Go back
      </button>
      {show && (
        <div className={styles.showDetails}>
          <h1 className="title">{show.name}</h1>
          <img className={styles.showImage} src={show.image.medium} alt="filmPreview" />
          <p>Show id- {id}</p>
        </div>
      )}
    </div>
  );
}
