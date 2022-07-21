import "./ImageFrame.scss";
import React from "react";
import styled from "styled-components";
const ImageFrame = (props) => {
  // console.log(props.alignment === "left");
  return (
    <StyledFrame
    // className="profile-img"
    >
      <img
        src={props.src}
        alt={props.name}
        style={{ borderRadius: "0.2rem" }}
      />
    </StyledFrame>
  );
};

export default ImageFrame;

const StyledFrame = styled.div`
  display: block;
  position: relative;
  margin: 1rem 2rem 1rem;
  max-width: 10rem;
  max-height: 15rem;
  z-index: 10;
  @media screen and (min-width: 576px) {
    max-width: 20rem;
    max-height: 25rem;
  }
  &:before {
    content: "";
    position: absolute;
    right: -32px;
    bottom: -12%;
    width: 100%;
    height: 100%;
    border: 3px solid var(--clr-primary-2);
    /* background: linear-gradient(to bottom right, var(--clr-primary-5), #222); */
    border-radius: 0.3rem;
    z-index: -10;
    transition: all 0.5s ease-in-out;
  }
  &:hover:before {
    bottom: -10px;
    right: -12px;
  }
`;

// (${(props) => props.alignment}):-12px ;

//  ${(props) => {
//       switch (props.$alignment) {
//         case "right":
//           return css`
//             right: -12px;
//           `;
//         case "left":
//           return css`
//             left: -12px;
//           `;
//         default:
//           return css`
//             right: -12px;
//           `;
//       }
//     }}

// ${(props) => props.alignment && `left: -10px`};
// ${(props) => props.alignment && `left: -12px`};

// ${(props) =>
//   props.alignment
//     ? css`
//         right: -15px;
//       `
//     : css`
//         left: -10px;
//       `}

//   ${(props) =>
//     props.alignment
//       ? css`
//           right: -32px;
//         `
//       : css`
//           left: -32px;
//         `};
