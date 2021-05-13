import React, { useState, useEffect } from 'react';
import { Title, Text, ToolTip, ToolTipText, NewButton, ButtonContainer } from '../styles/RandomRecipeStyles'
import { RecipeTitle, Image } from '../styles/RecipeStyles'

const CreateMeal = props => {

  console.log(props.recipe)

  if(!(props.recipe)){
    return null;
  }

	const ingredients = [];

	// Get all ingredients from the object. Up to 20 are returned
	for (let i = 1; i <= 20; i++) {
    const currentIngredient = props.recipe[`strIngredient${i}`];
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
    console.log(props.recipe)
    const recipe = props.recipe.meals[0];
    return (
      <>
        <RecipeTitle>{recipe.strMeal}</RecipeTitle>
        <Image src={recipe.strMealThumb} alt="Recipe Image"></Image>
      </>
    )
  }

	// const Recipe = `
	// 	<div class="row">
	// 		<div class="columns five">
	// 			<img src="${meal.strMealThumb}" alt="Meal Image">
	// 			${
	// 				meal.strCategory
	// 					? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
	// 					: ''
	// 			}
	// 			${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
	// 			${
	// 				meal.strTags
	// 					? `<p><strong>Tags:</strong> ${meal.strTags
	// 							.split(',')
	// 							.join(', ')}</p>`
	// 					: ''
	// 			}
	// 			<h5>Ingredients:</h5>
	// 			<ul>
	// 				${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
	// 			</ul>
	// 		</div>
	// 		<div class="columns seven">
	// 			<h4>${meal.strMeal}</h4>
	// 			<p>${meal.strInstructions}</p>
	// 		</div>
	// 	</div>
	// 	${
	// 		meal.strYoutube
	// 			? `
	// 	<div class="row">
	// 		<h5>Video Recipe</h5>
	// 		<div class="videoWrapper">
	// 			<iframe width="420" height="315"
	// 			src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
	// 			</iframe>
	// 		</div>
	// 	</div>`
	// 			: ''
	// 	}
	// `;
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

function RandomRecipe() {
  let [showList, setShowList] = useState(false);
  let [recipe, setRecipe] = useState(false);

  useEffect(async () => {
    const data = await NewRecipe();
    setRecipe(data);
  }, []);

  return (
    <>
        <Title>Dinner Decider</Title>
        <ToolTip>
          Hover for help
          <ToolTipText>Below you will see your randomly generated recipe. Click <b>save</b> to save the recipe to your list, click <b>new</b> to see a different recipe.</ToolTipText>
        </ToolTip>
        <CreateMeal recipe={recipe} key={recipe}></CreateMeal>
        <ButtonContainer>
          <NewButton onClick={() => setShowList(!showList)} >Save!</NewButton>
          <NewButton onClick={async () => {await NewRecipe(setRecipe)}} >New!</NewButton>
        </ButtonContainer>
    </>
  );
}

export default RandomRecipe;
