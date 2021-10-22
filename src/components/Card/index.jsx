import './Card.css';

function Card( props ) {

    const { faceDown } = props;

    return (
        <div className="Card">
            <div className="carta-box">
                <div className="carta" style={ faceDown ? {transform: 'rotateY(180deg)'} : {transform: 'rotateY(0deg)' } }>    
                    <div className="back">
                        <img 
                            src="https://w7.pngwing.com/pngs/902/280/png-transparent-ace-of-spades-playing-card-ace-of-hearts-spades-game-angle-king.png" 
                            width="200" 
                            height="250px" 
                            alt=""
                        />
                    </div>
                    <div className="front">
                        <img 
                            src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg" 
                            width="200" 
                            height="250px" 
                            alt=""
                        />
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Card;