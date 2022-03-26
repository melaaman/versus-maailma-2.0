import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import "./LinkCard.scss";

interface LinkCardProps {
    image: string;
    content: string;
}

const LinkCard = (props: LinkCardProps) => {
    return (
        <CardActionArea className="LinkCard">
            <Card className="LinkCard-content">
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
