import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        width: "fit-content"
      }
    }
  }
});

export default function SimpleMenu() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My acnbbjhbjhbjhcount</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </ThemeProvider>
    </div>
  );
}
