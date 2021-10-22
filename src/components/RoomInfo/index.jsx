import './RoomInfo.css';

function RoomInfo(props) {
    return (
        <div className="RoomInfo">
            <label>Número de Usuarios: { props['nro-usuarios'] }</label>
            <label>Sala: { props['cid'] }</label>
        </div>
    );
}

export default RoomInfo;