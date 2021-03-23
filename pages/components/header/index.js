import React, { useState } from 'react'
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n'


import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toobarTitle: {
        flex: 1
    },
    appBarra: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    pages: {

    },
    title: {

    },
    lngButtons: {

    },
    lngButton: {
        flexGrow: 4,
        marginLeft: theme.spacing(1),
        color: 'white'
    }
}));



function Header({ t }) {
    const classes = useStyles();

    const changeLanguage = (ln) => {
        return () => {
            i18n.changeLanguage(ln)
            console.log(`falando em ${ln}`)
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar className={classes.appBarra}>
                    <div className={classes.pages}>
                        <Link href="/">
                            <Button className={classes.lngButton}>
                                {t('header.page1')}
                            </Button>
                        </Link>

                        <Link href="/inter">
                            <Button className={classes.lngButton}>
                                {t('header.page2')}
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button className={classes.lngButton}>
                                {t('header.page3')}
                            </Button>
                        </Link>
                    </div>
                    <Typography className={classes.title}>
                        Meu blog
                        </Typography>
                    <div className={classes.lngButtons}>
                        <Button className={classes.lngButton} onClick={changeLanguage("en")}>
                            EN
                            </Button>
                        <Button className={classes.lngButton} onClick={changeLanguage("pt")}>
                            PT
                            </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default withNamespaces()(Header);