import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <img
          src="img/DanielFigueira.png"
          style={{
            width: '150px',
            border: 'solid 3px',
            borderRadius: '1000px',
          }}
        />
      </div>
    </Layout>
  );
}

export default Hello;
