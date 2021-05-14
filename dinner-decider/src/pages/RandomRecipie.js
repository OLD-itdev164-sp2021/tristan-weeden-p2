import React, { useState, useEffect } from 'react';
import { Title, Text, HelpButton, HelpBox, HelpText, CloseButton, Button, ButtonContainer, SavedBox, SavedRecipe } from '../styles/RandomRecipeStyles'
import { RecipeBox, RecipeTitle, Image, SectionHeader, SectionList, Instructions, Video, IFrame } from '../styles/RecipeStyles'

console.log(window.localStorage);

const SavedRecipes = window.localStorage.recipes || [];

const CreateMeal = props => {

  let recipe = props.recipe;

  if(!(recipe)){
    return null;
  } else {
    recipe = recipe.meals[0]
  }

	const ingredients = [];

	// Get all ingredients from the object. Up to 20 are returned
	for (let i = 1; i <= 20; i++) {
    const currentIngredient = recipe[`strIngredient${i}`];
		if (currentIngredient) {
			ingredients.push(
        currentIngredient
			);
		} else {
			// Stop if there are no more ingredients, the api will not skip an ingredient number so once one is blank the rest after will be as well
			break;
		}
	}

  const Recipe = () => {
    const recipe = props.recipe.meals[0];
    return (
      <RecipeBox>
        <RecipeTitle><u>{recipe.strMeal}</u></RecipeTitle>
        <Image src={recipe.strMealThumb} alt="Recipe Image"></Image>
        <SectionHeader>
            <u>Ingredients</u>
            <SectionList>{ingredients.map(ingredient => <li key={ingredient}><b>{ingredient}</b></li>)}</SectionList>
        </SectionHeader>
        <SectionHeader>
            <u>Instructions</u>
            <Instructions>{recipe.strInstructions}</Instructions>
        </SectionHeader>
        { recipe.strYoutube ? 
        <SectionHeader>
            <u>Video</u>
            <Video>
              <IFrame 
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11).replace("watch?v=", "v/")}`}>
              </IFrame>
            </Video>
          </SectionHeader>
            : null}
      </RecipeBox>
    )
  }

	return Recipe();
};


const NewRecipe = async (setRecipe = false) => {
  let data  = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  //use string literals
  let returnData = await data.json();
  if((setRecipe)) {
    setRecipe(returnData);
  }
  return returnData;
 }

const SaveRecipe = (recipe) => {
  if (SavedRecipes.some(strMeal => strMeal === recipe.meals[0].strMeal)) {
    alert ("Recipe Already Added To Saved List");
  } else {
    SavedRecipes.push(recipe.meals[0].strMeal)
    console.log(SavedRecipes);
    localStorage.setItem('recipes', SavedRecipes)
  }
};

const RandomRecipe = () => {
  let [showList, setShowList] = useState(false);
  let [recipe, setRecipe] = useState(false);
  let [help, setHelp] = useState(false);

  useEffect(async () => {
    const data = await NewRecipe();
    setRecipe(data);
  }, []);

  console.log(SavedRecipes);
  console.log(window.localStorage);

  return (
    <>
    { showList ? 
     <SavedBox>
        {SavedRecipes.split(",").map((recipe) =>
          <>
          <CloseButton onClick={() => setShowList(false)}>X</CloseButton>
          <ul>
          <SavedRecipe>{recipe}</SavedRecipe>
          </ul>
          </>
        )}
        {window.scrollTo(0,0)}
      </SavedBox> :

      <>
      <Title>Dinner Decider</Title>
        <HelpButton onClick={() => setHelp(true)}>?</HelpButton>
      <CreateMeal recipe={recipe} key={recipe}></CreateMeal>
      { help ? <HelpBox><HelpText>Below you will see your randomly generated recipe. Click <b>save</b> to save the recipe to your list, click <b>new</b> to see a different recipe.</HelpText><CloseButton onClick={() => setHelp(false)}>X</CloseButton></HelpBox> : null }
      <ButtonContainer>
        <Button onClick={() => SaveRecipe(recipe)} >Save!</Button>
        <Button onClick={() => setShowList(true)} >View Saved!</Button>
        <Button onClick={async () => {await NewRecipe(setRecipe)}} >New!</Button>
      </ButtonContainer>
      </> 
    }
  </>
  );
}

export default RandomRecipe;
