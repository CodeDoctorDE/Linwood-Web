import React from 'react';
import { createStyles, makeStyles, IconButton, Toolbar, AppBar, CssBaseline, useTheme, Hidden, Drawer, Typography, Paper, List, ListSubheader, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Switch, FormControl, Select, MenuItem, FormHelperText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ControlPanelNavbar from '../../components/ControlPanelNavbar';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import { useTranslation } from 'react-i18next';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default (props: Props) => {
    const [t, i18n] = useTranslation('ucp');
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
                display: 'flex',
                flexDirection: 'column'
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
            paper: {
                [theme.breakpoints.up('sm')]: {
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: drawerWidth,
                },
                minWidth: "450px"
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
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3)
            }
        })
    );
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const [language, setLanguage] = React.useState('en');

    const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string);
        i18n.changeLanguage(event.target.value as string);
    };
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
                        <ControlPanelNavbar page="user" />
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
                        <ControlPanelNavbar page="user" />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Paper className={classes.paper}>
                    <List subheader={<ListSubheader>{t("user.general.title")}</ListSubheader>}>
                        <ListItem>
                            <ListItemIcon>
                                <TranslateOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-language" primary={t('user.general.language.title')} />
                            <ListItemSecondaryAction>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        value={language}
                                        onChange={handleLanguageChange}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="de">German</MenuItem>
                                        <MenuItem value="en">English</MenuItem>
                                    </Select>
                                    <FormHelperText>{t('user.general.language.helper')}</FormHelperText>
                                </FormControl>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <BluetoothIcon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                            <ListItemSecondaryAction>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('bluetooth')}
                                    checked={checked.indexOf('bluetooth') !== -1}
                                    inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </main>
        </div>
    );
}