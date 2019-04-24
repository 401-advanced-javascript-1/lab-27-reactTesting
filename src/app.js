import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Counter from './components/counter/counter.js';
// import "./design/reset.scss";
import "./design/app.scss";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Footer />
      </div>  
    );
  }
}

export default App;
