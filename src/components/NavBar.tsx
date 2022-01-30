import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import MenuIcon from "@mui/icons-material/Menu";

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
];

const title = "versus_maailma_2.0";

const titleStyle = {
    color: "aliceblue",
    textShadow: "1px 1px 1px whitesmoke",
    cursor: "pointer",
    fontFamily: "monospace",
    fontWeight: 900,
    letterSpacing: "2px",
};

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

    return (
        <AppBar position="sticky" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        onClick={() => navigate("/")}
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            ...titleStyle,
                            mr: 2,
                            marginRight: "2em",
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
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
                                    key={index}
                                    onClick={() => handleCloseNavMenu(page.id)}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "monospace",
                                            fontWeight: "bolder",
                                        }}
                                        textAlign="center"
                                    >
                                        {page.header}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        onClick={() => navigate("/")}
                        noWrap
                        component="div"
                        sx={{
                            ...titleStyle,
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "end",
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                size="large"
                                onClick={() => handleCloseNavMenu(page.id)}
                                sx={{
                                    my: 2,
                                    color: "aliceblue",
                                    fontFamily: "monospace",
                                    fontSize: 16,
                                    fontWeight: 900,
                                    display: "block",
                                }}
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
