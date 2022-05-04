import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeToBox, changeToCircle } from "../features/mode/modeSlice";

const HeaderContainer = styled.div`
  display: flex;
`;

const Button = styled.input<{ isSelected: Boolean }>`
  font-weight: ${props => props.isSelected ? 700 : 500};
`;

export default function Header() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.mode);
  const handleClickBoxButton = () => {
    dispatch(changeToBox());
  };
  const handleClickCircleButton = () => {
    dispatch(changeToCircle());
  }
  return (
    <HeaderContainer>
      <Button type="button" value="Box" onClick={handleClickBoxButton} isSelected={mode.status === "Box"} />
      <Button type="button" value="Circle" onClick={handleClickCircleButton} isSelected={mode.status === "Circle"} />
      <Button type="button" value="Clear" isSelected={false} />
    </HeaderContainer>
  );
}