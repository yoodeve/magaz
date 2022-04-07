import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    is_center,
    is_hori,
    t_a,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    is_center:is_center,
    is_hori:is_hori,
    t_a:t_a,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  t_a:false,
  is_center:false,
  is_hori:false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}

  ${(props) =>
    props.is_center
      ? `display: grid; align-items: center; justify-content: center; `
      : ""}
  
  ${(props) =>
    props.is_hori
      ? `display: center; align-items: center; justify-content: center; `
      : ""}
      ${(props) =>
    props.t_a
      ? `text-align:center; `
      : ""}
  
  /* ${(props) => (props.center ? `text-align:center;` : "")}
  ${(props) => (props.justifyCon ? `justify-content: center;` : "")}
  ${(props) => (props.display ? `display: flex;` : "")} */
`;

export default Grid;
