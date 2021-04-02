
const Data = {
    nombre:'Pedro',
    edad:30
}

export const BotonCambiarData = ({setData}) => {
    return (
        <div>
            <button className="btn btn-primary" 
            onClick={() => setData (Data)}>
                Cambiar Data
            </button>
        </div>
    )
}