import styled from 'styled-components'

export const RecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const RecipeTitle = styled.h1`
  font-size: 2em;
  text-align: left;
  color: #1f9ef2;
  width: 75vw;
  min-height: 8vh;
  margin-top: 1.5vh;
  margin-left: 12vw;
`;

export const Image = styled.img`
  width: 40%;
`;

export const SectionHeader = styled.h1`
  font-size: 1.5em;
  color: #1f9ef2;
  width: 75vw;
  text-align: left;
  margin-left: 20vw;
  margin-top: 5vh;
`;

export const SectionList = styled.ol`
  font-size: 1.25em;
  color: #1f9ef2;
  /* list-style-type: circle; */
  margin-top: 1vh;

  li {
      font-size: .75em;
      color: #444444;
  }
`;

export const Instructions = styled.div`
  padding-right: 8vw;
  padding-left: 1vw;
  margin-top: 1vh;
  line-height: 1.5em;
  color: #444444;
`;

export const Video = styled.div`
  margin-top: 1vh;
  width: 100%;
  margin-left: 1vw;
`;

export const IFrame = styled.iframe`
  position: relative;
  width: 512px;
  height: 272px;
`;