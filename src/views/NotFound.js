import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: { textAlign: 'center' },
  status: { fontSize: 96, marginBottom: 16 },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.status}>404</h1>

      <p>
        It seems that you`re lost, here is the link to the home page{' '}
        <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
