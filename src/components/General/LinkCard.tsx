import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    useMediaQuery,
} from "@mui/material";
import "./LinkCard.scss";

interface LinkCardProps {
    image: string;
    content: string;
}

const LinkCard = (props: LinkCardProps) => {
    const mobileBreakPoint = useMediaQuery("(max-width:480px)");
    const tabletBreakPoint = useMediaQuery("(max-width:1024px)");
    return (
        <CardActionArea className="LinkCard">
            <Card
                style={{
                    width: mobileBreakPoint
                        ? "300px"
                        : tabletBreakPoint
                        ? "400px"
                        : "500px",
                }}
                className="LinkCard-content"
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
