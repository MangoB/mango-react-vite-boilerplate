import { useTranslation } from "react-i18next";
import {
  AppBar,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material';
import { supportedLngs } from "../i18n/config";



function NavBar() {
  const { i18n } = useTranslation();

  return (
    <>
      <AppBar
        color="primary"
        position="fixed"
        enableColorOnDark
      >
        <Toolbar>
          <Typography variant="h6">
            Mango Boilerplate
          </Typography>
          <FormControl
            size="small"
          >
            <Select
              value={i18n.resolvedLanguage}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              {Object.entries(supportedLngs).map(([code, name]) => (
                <MenuItem
                  value={code}
                  key={code}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default NavBar
