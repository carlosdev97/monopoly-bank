document.getElementById("unirse").addEventListener("click", () =>{
    const codigo = document.getElementById("codigo").value;
    if(codigo){
        alert(`Intentando unirse con el codigo: ${codigo}`);
    }else{
        alert("Por favor. ingresa un codigo válido.");
    }
});