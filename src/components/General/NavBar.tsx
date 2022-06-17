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
        id: "bagend",
        header: "Repunpää",
        color: "#590D82",
    },
    {
        id: "links",
        header: "Linkkejä",
        color: "#FFFFC9",
    },
];

const title = "versus maailma 2.0";

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

    const smallScreen = { xs: "flex", md: "flex" };

    return (
        <AppBar className="NavBar" position="sticky">
            <Container className="NavBar-container" maxWidth="xl">
                <Toolbar disableGutters>
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
                        <div className="NavBar-container-smallScreen-title-dot-pink" />
                        <div className="NavBar-container-smallScreen-title-dot-yellow" />
                        <div className="NavBar-container-smallScreen-title-dot-purple" />
                        <div className="NavBar-container-smallScreen-title-dot-green" />
                        {title}
                    </Typography>
                    <Box className="NavBar-container-smallScreen-menu">
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon className="NavBar-container-smallScreen-menu-button-icon" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={isOpen}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(isOpen)}
                            onClose={() => handleCloseNavMenu()}
                            sx={{
                                display: { xs: "block", md: "block" },
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
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
