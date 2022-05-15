import { orderBy } from "lodash";
import SpiderWeb from "../../assets/spider-web.png";
import { Link } from "../../data/link";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import SpacerComponent from "../General/SpacerComponent";
import "./Links.scss";

const Links = ({ links }: { links: Link[] }) => {
    return (
        <AppContainer className="Links">
            <AppHeader header="Linkkejä" />
            <SpacerComponent />
            <div className="Links-container">
                <img
                    className="Links-container-image"
                    src={SpiderWeb}
                    alt={"spiderweb"}
                    loading="lazy"
                />
                <div className="Links-container-list">
                    {orderBy(links, "orderId").map((link) => (
                        <div
                            className="Links-container-list-link"
                            key={link.orderId}
                        >
                            <a
                                className="Links-container-list-link-url"
                                href={link.link}
                            >
                                {link.link}
                                <div className="Links-container-list-link-description">
                                    {link.description}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </AppContainer>
    );
};

export default Links;
