import { useForm } from "../hooks/useForm";

interface formData {
    email: string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    const { formulario, handleChage } = useForm({
        email: "diazesterlin62@gmail.com",
        nombre: "Esterlyn Diaz",
        edad: 16
    });

    const { email, nombre, edad } = formulario;

    // const [formulario, setFormulario] = useState ({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChage = ( {target} : ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} =target;

    //     setFormulario({
    //         ...formulario,
    //         [name]:value
    //     });
    // }


    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChage}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={handleChage}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number"
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={handleChage}
                />
            </div>
            <pre>{JSON.stringify(formulario)}  </pre>

        </form>
    )
}