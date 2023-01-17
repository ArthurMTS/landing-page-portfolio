import { ThemeContext } from "Contexts/theme";
import React from "react";
import useStyles from "./Header.styles";

export const Header: React.FC = () => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);
  const [value, setValue] = React.useState(theme === "light");
  const { HeaderWrapper, Title, NavBar, NavLink, Switch } = useStyles();

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
        <Switch checked={value} onChange={onSwitchButtonChange} />
      </NavBar>
    </HeaderWrapper>
  );
};
