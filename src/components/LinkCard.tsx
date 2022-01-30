import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";

interface LinkCardProps {
    subheader: string;
    image: string;
    content: string;
}

const LinkCard = (props: LinkCardProps) => (
    <Card
        sx={{
            maxWidth: 500,
            backgroundColor: "white",
            color: "black",
        }}
    >
        <CardActionArea>
            <CardMedia
                component="img"
                height="250"
                image={props.image}
                alt="kuku"
                sx={{}}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="overline"
                    component="div"
                    sx={{
                        fontSize: "larger",
                    }}
                >
                    {props.subheader}
                </Typography>
                <Typography variant="body1">{props.content}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default LinkCard;
