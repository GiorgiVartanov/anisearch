import "./episodeCard.scss";

const EpisodeCard = ({ title, url }) => {
    return (
        <a className="episode-card" href={url}>
            {title}
        </a>
    );
};

export default EpisodeCard;
