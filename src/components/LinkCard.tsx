import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React from "react";

interface LinkCardProps {
    image: string;
    content: string;
}

const LinkCard = (props: LinkCardProps) => {
    const mobileBreakPoint = useMediaQuery("(max-width:480px)");
    const tabletBreakPoint = useMediaQuery("(max-width:1024px)");
    return (
        <CardActionArea>
            <Card
                sx={{
                    width: mobileBreakPoint
                        ? 300
                        : tabletBreakPoint
                            ? 400
                            : 500,
                    height: 360,
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 0,
                }}
            >
                <CardMedia
                    component="img"
                    height="250"
                    image={props.image}
                    alt="kuku"
                />
                <CardContent>
                    <Typography variant="body1">{props.content}</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};

export default LinkCard;
