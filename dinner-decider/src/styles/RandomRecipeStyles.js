import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.75em;
  text-align: center;
  color: #1f9ef2;
  width: 75vw;
  min-height: 5vh;
`;

export const Text = styled.p`
  font-size: 1.75em;
  text-align: left;
  color: #444444;
  width: 85vw;
  min-height: 5vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.button`
  font-size: 2em;
  margin-top: 6vh;
  margin-bottom: 6vh;
  padding: 0.25em 1em;
  border: 4px solid #1f9ef2;
  border-radius: 3px;
`;

export const HelpButton = styled.button`
  font-size: 2em;
  /* margin-top: 6vh; */
  /* margin-bottom: 6vh; */
  /* padding: 0.25em 1em; */
  border: 4px solid #1f9ef2;
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
  position: absolute;
  right: 15vw;
  top: 3vh;
`;

export const HelpBox = styled.div`
  position: absolute;
  background-color: aliceblue;
  opacity: 95%;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 17.5vh;
  font-size: 2em;
`;

export const HelpText = styled.div`
  width: 90vw;
  text-align: left;
  padding-left: 5vw;
`;

export const CloseButton = styled.div`
  font-size: 1.5em;
  border: 4px solid #1f9ef2;
  border-radius: 50%;
  width: 4.5vw;
  height: 4.5vw;
  position: absolute;
  right: 17.5vw;
  top: 5vh;
`;

export const SavedBox = styled.div`
  position: absolute;
  background-color: aliceblue;
  opacity: 95%;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 17.5vh;
  font-size: 2em;
`;

export const SavedRecipe = styled.li`
  width: 90vw;
  text-align: left;
  padding-left: 5vw;
`;