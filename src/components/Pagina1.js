

export const Pagina1 = ({Data}) => {
    return (
        <div>
            <h1>Pagina 1</h1>
            <hr/>
            <pre>
                {JSON.stringify(Data,null,2)}
            </pre>
        </div>
    )
}