import { ChangeEvent, useState } from "react";


// export function useForm<T>(initState: T){
export const useForm = <T extends object>(initState: T) =>{

    const [formulario, setFormulario] = useState(initState);

    const handleChage = ( {target} : ChangeEvent<HTMLInputElement>) => {
        const {name, value} =target;

        setFormulario({
            ...formulario,
            [name]:value
        });
    }

    return{
        formulario,
        handleChage
    }

}