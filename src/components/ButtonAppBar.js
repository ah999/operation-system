import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import CreateButton from './CreateButton';
import { Button } from '@material-ui/core';
export default function ButtonAppBar() {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  const opRooms = () => {
    navigate('/oprooms');
  };
  const deps = () => {
    navigate('/deps');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={home}
              >
                Home
              </Button>
            </strong>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={deps}
              >
                Departments
              </Button>
            </strong>
          </Typography>
          <Typography>
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={opRooms}
              >
                Operation Rooms
              </Button>
            </strong>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
