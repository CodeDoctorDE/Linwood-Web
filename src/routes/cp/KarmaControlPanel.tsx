import React from 'react';
import { createStyles, makeStyles, IconButton, Toolbar, AppBar, CssBaseline, useTheme, Hidden, Drawer, Typography, Card, CardContent, CardActions, Button, CardHeader, GridList, Grid, LinearProgress } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ControlPanelNavbar from '../../components/ControlPanelNavbar';

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
    const drawerWidth = 240;
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
                        Karma
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
                        <ControlPanelNavbar page="karma" />
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
                        <ControlPanelNavbar page="karma" />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={5}>
                    <Grid item md={12}>
                        <Card>
                            <CardHeader title="Welcome CodeDoctor" />
                            <CardContent>
                                <Typography color="textSecondary">
                                    Here you can aef everything what you need!
                        </Typography>
                        <LinearProgress variant="determinate" value={50} />

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Card>
                            <CardHeader title="Web Repository" />
                            <CardContent>
                                <Typography color="textSecondary">
                                    It will be cool if you can give me feedback! A star on github helps me too!
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>Bug report</Button>
                                <Button>Feature request</Button>
                                <Button>Star</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Card>
                            <CardHeader title="Bot Repository" />
                            <CardContent>
                                <Typography color="textSecondary">
                                    It will be cool if you can give me feedback! A star on github helps me too!
                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>Bug report</Button>
                                <Button>Feature request</Button>
                                <Button>Star</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}