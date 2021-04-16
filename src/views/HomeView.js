import React from 'react';
import callSaul from './callSaul.jpg';

const styles = {
  image: {
    backgroundSize: 'auto',
  },
  div: {
    marginTop: 60,
  },
};

const HomeView = () => (
  <div style={styles.div}>
    <img src={callSaul} alt="" style={styles.image} width="100%" />
  </div>
);

export default HomeView;
