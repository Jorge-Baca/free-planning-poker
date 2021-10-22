import './Card.css';

function Card() {

    return (
        <div className="Card">
            <div className="carta-box">
                <div className="carta">    
                    <div className="cara detras">
                    <img 
                        src="https://w7.pngwing.com/pngs/902/280/png-transparent-ace-of-spades-playing-card-ace-of-hearts-spades-game-angle-king.png" 
                        width="200" 
                        height="250px" 
                        alt=""
                    />
                    </div>
                    <div className="cara">
                    <img 
                        src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg" 
                        width="200" 
                        height="250px" 
                        alt=""
                    />
                    </div>    
                </div>
            </div>
            <button> Presiona aqui </button>
        </div>
    );
}

export default Card;