import React from 'react';
import { createStyles, makeStyles, IconButton, Toolbar, AppBar, CssBaseline, useTheme, Hidden, Drawer, Typography, Paper, Tabs, Tab, ListItem, List, ListItemIcon, ListItemText, ListItemSecondaryAction, FormControl, Select, MenuItem, FormHelperText, ListSubheader, Divider, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ControlPanelNavbar from '../../components/ControlPanelNavbar';
import { useTranslation } from 'react-i18next';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default () => {
    const [t] = useTranslation('ucp');
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [language, setLanguage] = React.useState("en");
    const container = window !== undefined ? () => window.document.body : undefined;
    const theme = useTheme();
    const drawerWidth = 250;
    const prefixes = ["+lw", "+linwood"];
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
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
                paddingTop: theme.spacing(10)
            },
            input: {
              marginLeft: theme.spacing(1),
              flex: 1,
            },
            iconButton: {
              padding: 10,
            },
            divider: {
              height: 28,
              margin: 4,
            },
            add: {
                display: 'flex',
                marginBottom: theme.spacing(4)
            }
        })
    );
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string);
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
                        {t('admin.title')}
                    </Typography>
                </Toolbar>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="General" icon={<TuneOutlinedIcon />} {...a11yProps(0)} />
                    <Tab label="Notifications" icon={<NotificationsNoneOutlinedIcon />} {...a11yProps(1)} />
                    <Tab label="Game" icon={<SportsEsportsOutlinedIcon />} {...a11yProps(2)} />
                </Tabs>
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
                        <ControlPanelNavbar page="admin" />
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
                        <ControlPanelNavbar page="admin" />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Paper>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <TranslateOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-language" primary={t('admin.general.language.title')} />
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
                                            <FormHelperText>{t('admin.general.language.helper')}</FormHelperText>
                                        </FormControl>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem>
                                    <List
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                        subheader={
                                            <ListSubheader id="nested-list-subheader">
                                                {t('admin.general.prefixes.title')}
                                            </ListSubheader>
                                        }
                                    >
                                        {prefixes.map((prefix) =>
                                        <ListItem key={prefix}>
                                            {prefix}
                                            <ListItemSecondaryAction>
                                                <IconButton>
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
    </ListItem>
                                        )}
                                        <Divider />
                                        <ListItem>
                                            <TextField placeholder={t('admin.general.prefixes.input')} />
                                            <ListItemSecondaryAction>
                                                <IconButton className={classes.iconButton}>
                                            <AddCircleOutlineIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                </ListItem>
                            </List>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
        </TabPanel>
                    </SwipeableViews>
                </Paper>
            </main>
        </div>
    );
}