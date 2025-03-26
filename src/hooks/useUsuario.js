import React, { useState, useEffect } from'react';
import { onChangeUser } from '../firebase/firebase';
const useUsuario = () => {
    const [usuario, setUsuario] = useState(undefined)

    useEffect(() => {
        onChangeUser(setUsuario)
    }, [])
    return usuario;
}

export default useUsuario 