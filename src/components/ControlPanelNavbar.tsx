import React from 'react'
import { makeStyles, Theme, createStyles, Typography, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Button, Avatar, Grid } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    icon: {
      marginRight: "1em"
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    changeButton: {
      margin: "0.5em",
      alignSelf: 'center'
    }
  })
);
interface Props {
  page?: 'home' | 'karma' | 'stats' | 'user' | 'dashboard' | 'game' | 'admin';
  admin?: boolean;
}
export default (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12}>
        <Toolbar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.icon} />
          <Typography variant="h6">Test</Typography>
        </Toolbar>
        </Grid>
        <Button variant="contained" className={classes.changeButton}>Change server</Button>
      </Grid>
      <Divider />
      <List subheader={<ListSubheader>User Section</ListSubheader>} className={classes.root}>
        <ListItem selected={props.page === 'home'} button component={RouterLink} to="/cp">
          <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem selected={props.page === 'karma'} button component={RouterLink} to="/cp/karma">
          <ListItemIcon><FavoriteBorderOutlinedIcon /></ListItemIcon>
          <ListItemText>Karma</ListItemText>
        </ListItem>
        <ListItem selected={props.page === 'stats'} button component={RouterLink} to="/cp/statistics">
          <ListItemIcon><ShowChartOutlinedIcon /></ListItemIcon>
          <ListItemText>Statistics</ListItemText>
        </ListItem>
        <ListItem selected={props.page === 'user'} button component={RouterLink} to="/cp/user">
          <ListItemIcon><TuneOutlinedIcon /></ListItemIcon>
          <ListItemText>User Settings</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List subheader={<ListSubheader>Admin Section</ListSubheader>} className={classes.root}>
        <ListItem disabled={!props.admin} selected={props.page === 'dashboard'} button component={RouterLink} to="/cp/dashboard">
          <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem disabled={!props.admin} selected={props.page === 'game'} button component={RouterLink} to="/cp/game">
          <ListItemIcon><SportsEsportsOutlinedIcon /></ListItemIcon>
          <ListItemText>Game Settings</ListItemText>
        </ListItem>
        <ListItem disabled={!props.admin} selected={props.page === 'admin'} button component={RouterLink} to="/cp/admin">
          <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
          <ListItemText>Admin Settings</ListItemText>
        </ListItem>
      </List>
    </div>
  )
}