import React from 'react'
import { makeStyles, Theme, createStyles, Typography, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Button, Avatar, Grid } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import { useTranslation } from 'react-i18next';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';

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
          <Avatar alt="Cindy Baker" className={classes.icon} />
          <Typography variant="h6">Test</Typography>
        </Toolbar>
        </Grid>
        <Button variant="outlined" color="primary" className={classes.changeButton} href="/servers">{t('change')}</Button>
      </Grid>
      <Divider />
      <List subheader={<ListSubheader>{t('user.title')}</ListSubheader>} className={classes.root}>
        <ListItem selected={page === 'home'} button href="/cp" className={classes.item}>
          <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('user.home')}</ListItemText>
        </ListItem>
        <ListItem selected={page === 'karma'} button href="/cp/karma" className={classes.item}>
          <ListItemIcon><FavoriteBorderOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('user.karma')}</ListItemText>
        </ListItem>
        <ListItem selected={page === 'stats'} button href="/cp/stats" className={classes.item}>
          <ListItemIcon><ShowChartOutlinedIcon /></ListItemIcon>
          <ListItemText>Statistics</ListItemText>
        </ListItem>
        <ListItem selected={page === 'user'} button href="/cp/user" className={classes.item}>
          <ListItemIcon><TuneOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('user.user')}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List subheader={<ListSubheader>{t('admin.title')}</ListSubheader>} className={classes.root}>
        <ListItem disabled={!admin} selected={page === 'dashboard'} button href="/cp/dashboard" className={classes.item}>
          <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('admin.dashboard')}</ListItemText>
        </ListItem>
        <ListItem disabled={!admin} selected={page === 'admin'} button href="/cp/admin" className={classes.item}>
          <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
          <ListItemText>{t('admin.settings')}</ListItemText>
        </ListItem>
        <ListItem disabled={!admin} button href="/dev" className={classes.item}>
          <ListItemIcon><CodeOutlinedIcon/></ListItemIcon>
          <ListItemText>{t('admin.code')}</ListItemText>
          <ChevronRightOutlinedIcon />
        </ListItem>
      </List>
    </div>
  )
}