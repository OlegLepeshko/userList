import React from "react";
import { AppBar, Container, IconButton, Toolbar, Button, Typography, Box, makeStyles, Dialog, DialogTitle, useTheme, useMediaQuery, Menu, MenuItem, Link} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundOverlay: 'rgba(0, 0, 0, .3)',
    },
}))

const DashBoard = () => {
    const classes = useStyles();

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [openLogInDialog, setOpenLogInDialog] = React.useState<boolean>(false);

    const handleOpenLogInDialog = () => setOpenLogInDialog(true);

    const handleCloseLogInDialog = () => setOpenLogInDialog(false);

    return (
        <AppBar position="fixed">
            <Container fixed>
                <div className={classes.overlay} />
                    <Button variant="outlined" onClick={handleOpenLogInDialog}>Info</Button>
                    <Box mr={3}>
                        <Dialog  fullScreen={fullScreen} open ={openLogInDialog} onClose={handleCloseLogInDialog} aria-labelledby='loginForm'>
                            <DialogTitle id="logInFormTitle">
                                User info
                            </DialogTitle>
                        </Dialog>
                    </Box>
            </Container>
        </AppBar>
    )
}

export default DashBoard;