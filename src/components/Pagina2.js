

export const Pagina2 = ({Data}) => {
    return (
        <div>
            <h1>Pagina 2</h1>
            <hr/>
            <pre>
                {JSON.stringify(Data,null,2)}
            </pre>
        </div>
    )
}