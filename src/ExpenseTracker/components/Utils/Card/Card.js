import "./Card.css";

function Card(props) {
    const rootClasses = "card " + props.className;

    return (
        <div className={rootClasses}>
            {props.children}
        </div>
    );
}

export default Card;