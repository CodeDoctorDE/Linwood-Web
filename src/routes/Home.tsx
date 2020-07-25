import React from 'react'
import { Button, makeStyles, CssBaseline, AppBar, Toolbar, Typography, Container, Grid } from '@material-ui/core'
import ReactPlayer from 'react-player'
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    
  icon: {
    marginRight: theme.spacing(2),
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  info: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  }));

export default function HomePage() {
  const [t] = useTranslation('index');
    const classes = useStyles();
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeOutlinedIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Linwood
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Linwood
            </Typography>
            
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <ReactPlayer url='https://www.youtube.com/watch?v=m1mac2d19Fo' playing width="auto" />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={RouterLink} to="/login">
                    {t("webinterface")}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" target="_blank" href="https://github.com/CodeDoctorDE/Linwood">
                    View on github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
      </React.Fragment>
    );
}
