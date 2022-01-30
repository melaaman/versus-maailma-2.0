import { orderBy } from "lodash";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import SpiderWeb from "../assets/spider-web.png";
import { StylesDictionary } from "../styles";

export interface Link {
    link: string;
    description: string;
    orderId: number;
}

export const initialLinksState: Link = {
    link: "",
    description: "",
    orderId: -1,
};

const styles: StylesDictionary = {
    container: {
        padding: "2em 1em",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2em",
    },
    image: {
        width: "50%",
        maxWidth: "400px",
    },
    list: {
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginLeft: "auto",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "larger",
    },
    linkContainer: {
        width: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "pre-line",
    },
    description: {
        textIndent: "1em",
        textTransform: "uppercase",
    },
};

const Links = ({ links }: { links: Link[] }) => {
    return (
        <AppContainer className="Links">
            <AppHeader header="Linkkejä" />
            <div style={styles.container}>
                <img
                    src={SpiderWeb}
                    alt={"spiderweb"}
                    loading="lazy"
                    style={styles.image}
                />
                <div style={styles.list}>
                    {orderBy(links, "orderId").map((link) => (
                        <div key={link.orderId} style={styles.linkContainer}>
                            <a href={link.link} style={styles.link}>
                                {link.link}
                            </a>
                            <div style={styles.description}>
                                {link.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppContainer>
    );
};

export default Links;
