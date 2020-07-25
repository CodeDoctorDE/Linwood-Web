import React from 'react';
import { createStyles, makeStyles, IconButton, Toolbar, AppBar, CssBaseline, useTheme, Hidden, Drawer, Typography, Card, CardContent, CardActions, Button, CardHeader, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ControlPanelNavbar from '../../components/ControlPanelNavbar';
import { useTranslation } from 'react-i18next';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default (props: Props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const theme = useTheme();
    const drawerWidth = 250;
    const [t] = useTranslation('ucp');
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: 'flex'
            },
            drawer: {
                [theme.breakpoints.up('sm')]: {
                    width: drawerWidth,
                    flexShrink: 0,
                },
            },
            appBar: {
                [theme.breakpoints.up('sm')]: {
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: drawerWidth,
                },
            },
            menuButton: {
                marginRight: theme.spacing(2),
                [theme.breakpoints.up('sm')]: {
                    display: 'none',
                },
            },
            // necessary for content to be below app bar
            toolbar: theme.mixins.toolbar,
            drawerPaper: {
                width: drawerWidth,
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
            }
        })
    );
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {t('user.title')}
                </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        <ControlPanelNavbar page="home" />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <ControlPanelNavbar page="home" />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title={t('home.welcome.title')} />
                            <CardContent>
                                <Typography color="textSecondary">
                                {t('home.welcome.content')}
                        </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title={t('home.web.title')} />
                            <CardContent>
                                <Typography color="textSecondary">
                                {t('home.web.content')}
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="secondary">{t('home.web.actions.bug-report')}</Button>
                                <Button color="secondary">{t('home.web.actions.feature-request')}</Button>
                                <Button color="secondary">{t('home.web.actions.star')}</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title={t('home.bot.title')} />
                            <CardContent>
                                <Typography color="textSecondary">
                                {t('home.bot.content')}
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="secondary">{t('home.bot.actions.bug-report')}</Button>
                                <Button color="secondary">{t('home.bot.actions.feature-request')}</Button>
                                <Button color="secondary">{t('home.bot.actions.star')}</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}