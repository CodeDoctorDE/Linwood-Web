import React from 'react';
import { createStyles, makeStyles, IconButton, Toolbar, AppBar, CssBaseline, useTheme, Hidden, Drawer, Typography, Grid, Table, TableHead, TableContainer, Paper, TableRow, TableCell, TableBody, TablePagination, TableFooter, Theme, Collapse, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ControlPanelNavbar from '../../components/ControlPanelNavbar';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Karma from '../../components/Karma';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}


function createData(name: string, xp: number) {
    return { name, xp };
}

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const constant = 1;

function Row(props: { row: ReturnType<typeof createData>, rank: number }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const useStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'unset',
            },
        },
    });
    const classes = useStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root} key={row.name}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{props.rank}</TableCell>
                <TableCell align="center" component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.xp}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Karma name={row.name} xp={row.xp} constant={constant} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexShrink: 0,
                marginLeft: theme.spacing(2.5),
            },
        }),
    );
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}
export default (props: Props) => {
    const [t] = useTranslation('ucp');
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 250;
    const theme = useTheme();

    const rows = [
        createData('Cupcake', 305),
        createData('Donut', 452),
        createData('Eclair', 262),
        createData('Frozen yoghurt', 159),
        createData('Gingerbread', 356),
        createData('Honeycomb', 408),
        createData('Ice cream sandwich', 237),
        createData('Jelly Bean', 375),
        createData('KitKat', 518),
        createData('Lollipop', 392),
        createData('Marshmallow', 500),
        createData('Nougat', 360),
        createData('Oreo', 437),
    ].sort((a, b) => (a.xp > b.xp ? -1 : 1));
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
            paper: {
                padding: theme.spacing(6),
                margin: 'auto',
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
            table: {
                minWidth: 500
            },
            scroll: {
                overflow: 'auto',
                maxWidth: '100%'
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
            },
            title: {
                flex: '1 1 100%',
                padding: theme.spacing(1),
            },
        })
    );
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                        {t('karma.title')}
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
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.title} variant="h5" id="tableTitle" component="div">
                                {t('karma.user')}
                                </Typography>
                            <Karma name="CodeDoctor" xp={25} constant={constant} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.scroll}>
                            <Toolbar>
                                <Typography className={classes.title} variant="h5" id="tableTitle" component="div">
                                    {t('karma.leaderboard.title')}
                                </Typography>
                            </Toolbar>
                            <TableContainer className={classes.table}>
                                <Table aria-label="custom pagination table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell>{t('karma.leaderboard.rank')}</TableCell>
                                            <TableCell align="center" component="th" scope="row">{t('karma.leaderboard.name')}</TableCell>
                                            <TableCell align="right">{t('karma.leaderboard.xp')}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row, index) => (
                                            <Row key={index} row={row} rank={(page * rowsPerPage) + index + 1} />
                                        ))}
                                        {emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                                rowsPerPageOptions={[5, 10, 25, { label:  t('karma.leaderboard.rowsperpage.all'), value: -1 }]}
                                                colSpan={3}
                                                labelRowsPerPage={ t('karma.leaderboard.rowsperpage.title')}
                                                labelDisplayedRows= {(args) => t('karma.leaderboard.rowsperpage.display', args)}
                                                count={rows.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                SelectProps={{
                                                    inputProps: { 'aria-label': 'rows per page' },
                                                    native: false,
                                                }}
                                                onChangePage={handleChangePage}
                                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                                ActionsComponent={TablePaginationActions}
                                            />
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </div >
    );
}