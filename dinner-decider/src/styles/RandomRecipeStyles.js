import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.75em;
  text-align: center;
  color: #1f9ef2;
  width: 75vw;
  min-height: 5vh;
`;

export const ToolTipText = styled.div`
  visibility: hidden;
  /* width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px; */
 
  /* Position the tooltip text - see examples below! */
  /* position: absolute; */
  /* z-index: 1; */
`;

export const ToolTip = styled.div`
  /* Position the tooltip text - see examples below! */
  /* position: absolute; */
  /* z-index: 1; */

  &:hover ${ToolTipText}{
    visibility: visible;
  }
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

export const NewButton = styled.button`
  font-size: 2em;
  margin-top: 6vh;
  margin-bottom: 6vh;
  padding: 0.25em 1em;
  border: 4px solid #1f9ef2;
  border-radius: 3px;
`;