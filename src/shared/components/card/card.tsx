import "./card.scss";

function CardComponent(props: { fluid?: boolean, children?: any; title?: string; }) {
    const { title, fluid, children } = props;

    return (
        <div className={fluid ? "card-fluid" : "card"}>
            <h2 className="cardTitle">{title}</h2>
            {children}
        </div>
    );
}

export default CardComponent;
