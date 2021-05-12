import React, { useState } from 'react';
import { Title, Explanation, DecideButton } from '../styles/ExplanationStyles'


function RandomRecipe() {
  // const Decide = (props) => {
    const [showList, setShowList] = useState(false);
  // }
  console.log(showList);
  return (
    <>
        <Title>Welcome to Dinner Decider!</Title>
        <Explanation>Do you ever struggle to <b>decide</b> on what to eat for dinner? If so look no further, this website is designed to solve that problem!</Explanation>
        <Explanation>When you click <b>"Decide!"</b> the site will populate with a dinner idea. Like it? Make it. Want to save a few to decide from? Add it to your recipe list. Want a new recipe? Click new. <b>Enjoy!</b></Explanation>
        <DecideButton onClick={() => setShowList(!showList)} >Decide!</DecideButton>
    </>
  );
}

export default RandomRecipe;
