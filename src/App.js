import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

const App = () => {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/new" component={NewProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
