const { default: styled, keyframes } = require("styled-components");


/**
 * Keyframes for animations
 */

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
 `;

/**
 * Styling
 */
const Page = styled.div`
  color: black;
  text-align: center;
`;
export const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: black;
  color: red;
  font-size: 18px;
  border: none;
  border-radius: 5px / 5px;
`;
export const Cases = styled.div`
animation: ${fadeIn} .3s;
h2{
  color: red;
  font-size: 20px;
  font-family: Arial;
}

`;
export const SelectWrapper = styled.h3`
margin: 1% 0;
`;
export const ActiveCases = styled.h3`
    color: blue;
`;
export const PositiveCases = styled.h3`
    color: red;
`;
export const Recoveries = styled.h3`
    color: green;
`;
export const RecordedDeaths = styled.h3`
    color: black;
`;

export default Page;