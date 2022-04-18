import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

const pages = [
    {
        id: "about",
        header: "Sivuista",
        color: "#ff5b77",
    },
    {
        id: "journal",
        header: "(Luku)päiväkirja",
        color: "#ffff00",
    },
    {
        id: "shortTexts",
        header: "Lyhyesti",
        color: "#98ffcc",
    },
    {
        id: "essays",
        header: "Esseet",
        color: "hotpink",
    },
    {
        id: "links",
        header: "Linkkejä",
        color: "#FFFFC9",
    },
    {
        id: "bagend",
        header: "Projekti Repunpää",
        color: "#590D82",
    },
];

const title = "VERSUS_MAAILMA_2.0";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setIsOpen(event.currentTarget);
    };

    function handleCloseNavMenu(id?: string) {
        setIsOpen(null);
        if (id) {
            navigate(`/${id}`);
        }
    }

    const largeScreen = {
        xs: "none",
        md: "flex",
    };

    const smallScreen = { xs: "flex", md: "none" };

    return (
        <AppBar className="NavBar" position="sticky" color="primary">
            <Container className="NavBar-container" maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        className="NavBar-container-largeScreen-title"
                        onClick={() => navigate("/")}
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            display: largeScreen,
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        className="NavBar-container-smallScreen-menu"
                        sx={{
                            display: smallScreen,
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={isOpen}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(isOpen)}
                            onClose={() => handleCloseNavMenu()}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    className="NavBar-container-smallScreen-menu-pages"
                                    key={index}
                                    onClick={() => handleCloseNavMenu(page.id)}
                                >
                                    <Typography className="NavBar-container-smallScreen-menu-pages-page">
                                        {page.header}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        className="NavBar-container-smallScreen-title"
                        variant="h5"
                        onClick={() => navigate("/")}
                        noWrap
                        component="div"
                        sx={{
                            display: smallScreen,
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        className="NavBar-container-largeScreen-menu"
                        sx={{
                            display: largeScreen,
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                className="NavBar-container-largeScreen-menu-pages"
                                key={index}
                                size="large"
                                onClick={() => handleCloseNavMenu(page.id)}
                                sx={{}}
                            >
                                {page.header}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
