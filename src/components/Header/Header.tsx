import { ThemeContext } from "Contexts/theme";
import React from "react";
import styles from "./Header.styles";

export const Header: React.FC = () => {
  const [value, setValue] = React.useState(true);
  const { HeaderWrapper, Title, NavBar, NavLink, Switch } = styles();
  const { toggleTheme } = React.useContext(ThemeContext);

  const onSwitchButtonChange = () => {
    const newValue = !value;
    toggleTheme(newValue ? "light" : "dark");
    setValue(newValue);
  };

  return (
    <HeaderWrapper>
      <Title>ArthurMTS</Title>

      <NavBar>
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Home
        </NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <Switch
          checked={value}
          onChange={onSwitchButtonChange}
        />
      </NavBar>
    </HeaderWrapper>
  );
};
