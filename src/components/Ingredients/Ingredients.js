import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  return (
    <div className="App">
      <IngredientForm />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
};

export default Ingredients;
