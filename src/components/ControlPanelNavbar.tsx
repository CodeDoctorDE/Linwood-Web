import React from 'react'
import { makeStyles, Theme, createStyles, Typography, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Button, Avatar, Grid } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    icon: {
      marginRight: "1em"
    },
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    changeButton: {
      margin: "0.5em",
      alignSelf: 'center'
    },
    item: {
    }
  })
);
interface Props {
  page?: 'home' | 'karma' | 'stats' | 'user' | 'dashboard' | 'admin';
  admin?: boolean;
}
export default ({admin=true, page}: Props) => {
  const classes = useStyles();
  const [t] = useTranslation('navbar');
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12}>
        <Toolbar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.icon} />
          <Typography variant="h6">Test</Typography>
        </Toolbar>
        </Grid>
        <Button variant="outlined" color="primary" className={classes.changeButton} component={RouterLink} to="/servers">{t('change')}</Button>
      </Grid>
      <Divider />
      <List subheader={<ListSubheader>{t('user.title')}</ListSubheader>} className={classes.root}>
        <ListItem selected={page === 'home'} button component={RouterLink} to="/cp" className={classes.item}>
          <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('user.home')}</ListItemText>
        </ListItem>
        <ListItem selected={page === 'karma'} button component={RouterLink} to="/cp/karma" className={classes.item}>
          <ListItemIcon><FavoriteBorderOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('user.karma')}</ListItemText>
        </ListItem>
        <ListItem selected={page === 'stats'} button component={RouterLink} to="/cp/stats" className={classes.item}>
          <ListItemIcon><ShowChartOutlinedIcon /></ListItemIcon>
          <ListItemText>Statistics</ListItemText>
        </ListItem>
        <ListItem selected={page === 'user'} button component={RouterLink} to="/cp/user" className={classes.item}>
          <ListItemIcon><TuneOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('user.user')}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List subheader={<ListSubheader>{t('admin.title')}</ListSubheader>} className={classes.root}>
        <ListItem disabled={!admin} selected={page === 'dashboard'} button component={RouterLink} to="/cp/dashboard" className={classes.item}>
          <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('admin.dashboard')}</ListItemText>
        </ListItem>
        <ListItem disabled={!admin} selected={page === 'admin'} button component={RouterLink} to="/cp/admin" className={classes.item}>
          <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('admin.settings')}</ListItemText>
        </ListItem>
      </List>
    </div>
  )
}