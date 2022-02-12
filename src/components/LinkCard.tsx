import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    useMediaQuery,
} from "@mui/material";

interface LinkCardProps {
    image: string;
    content: string;
}

const LinkCard = (props: LinkCardProps) => {
    const matches = useMediaQuery("(max-width:480px)");
    return (
        <CardActionArea>
            <Card
                sx={{
                    width: matches ? 300 : 500,
                    height: 350,
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
