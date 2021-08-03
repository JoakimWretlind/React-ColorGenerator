import styled from 'styled-components';

export const Section = styled.section`
    width: 90vw;
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Input = styled.input`
  margin-left: 2rem;
  padding: 0.8rem 1.2rem;
  border-color: transparent;
  outline: none;
  border-radius: .5rem 0 0rem .5rem;
  background: #FFF;
  letter-spacing: .1rem;
  &.error {
    border: 2px solid red;
  }
`;

export const Button = styled.button`
  padding: .8rem 1.2rem;
  border-radius: 0 .5rem .5rem 0;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  background: #CBD2D9;
  letter-spacing: .1rem;
  text-transform: capitalize;
  transition: .2s ease-out;
  &:hover {
    background: #9aa5b1;
    color: #FFFFFF;
  }
`;

export const ColorContainer = styled.div`
    min-height: calc(100vh - 100px);
    margin: 0 auto 5rem;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`;

/** SINGLE COLOR */
export const Article = styled.article`
  &.color {
      	padding: 1rem 2rem;
        cursor: pointer;
        font-size: 1rem;
        text-transform: none;
    }
    &.color-light {
        color: #fff;
    }
    
`;