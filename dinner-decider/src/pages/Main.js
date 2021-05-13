import React, { useState } from 'react';
import Explanation from './Explanation';
import RandomRecipe from './RandomRecipie'
import { Content } from '../styles/Main';

function Main() {
  const [showRecipe, setShowRecipe] = useState(false);
  console.log(showRecipe);
  return (
    <Content>
      { showRecipe ? <RandomRecipe></RandomRecipe> : <Explanation showRecipe={showRecipe} setShowRecipe={setShowRecipe}></Explanation>}
    </Content>
  );
}

export default Main;
