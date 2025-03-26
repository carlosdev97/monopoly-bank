const Transaction = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Transaction</h1>
      <div className="row">
        <form className="bg-white shadow rounded-3 d-flex flex-column p-4 gap-3">
          <div className="d-flex row row-cols-1 row-cols-lg-3 gy-3 gx-lg-3">
            <div className="col-lg-4">
              <label htmlFor="" className="form-label fw-bold">
                Monto
              </label>
              <input className="form-control" />
            </div>
            <div className="col-lg-4">
              <label htmlFor="" className="form-label fw-bold">
                Tipo
              </label>
              <select className="form-select">
                <option value="">Tipo...</option>
                <option value="compra_propiedad">Compra de propiedad</option>
                <option value="pago_renta">Pago de renta</option>
                <option value="compra_casa">Compra de casa</option>
                <option value="compra_hotel">Compra de hotel</option>
                <option value="hipoteca">Hipoteca</option>
                <option value="levantamiento_hipoteca">
                  Levantamiento de hipoteca
                </option>
                <option value="impuesto">Pago de impuestos</option>
                <option value="tarjeta_suerte">Tarjeta de Suerte</option>
                <option value="tarjeta_caja_comunidad">
                  Tarjeta de Caja de Comunidad
                </option>
                <option value="salida_cobro">Cobro por pasar Salida</option>
                <option value="cobro_renta">Cobro de renta</option>
                <option value="intercambio">Intercambio entre jugadores</option>
                <option value="pago_carcel">
                  Pago para salir de la cárcel
                </option>
                <option value="banco_a_jugador">
                  Pago del Banco a Jugador
                </option>
                <option value="jugador_a_banco">
                  Pago del Jugador al Banco
                </option>
                <option value="jugador_a_jugador">Pago entre jugadores</option>
              </select>
            </div>
            <div className="col-lg-4">
              <label htmlFor="inputDestino" className="form-label fw-bold">
                Destino
              </label>
              <select
                id="inputDestino"
                className="form-select"
                aria-label="Selecciona un destino"
              >
                <option value="">Destino...</option>
                <option value="bank">Banco</option>
                <option value="1">Jugador 1</option>
                <option value="2">Jugador 2</option>
                <option value="3">Jugador 3</option>
                <option value="4">Jugador 4</option>
                <option value="5">Jugador 5</option>
                <option value="6">Jugador 6</option>
                <option value="7">Jugador 7</option>
                <option value="8">Jugador 8</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success col">
            Confirmar
          </button>
        </form>
        <div className="border-top pt-3 p-0">
          <h5 className="mb-3 text-center">Historial de Transacciones</h5>
          <div className="list-group">
            <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Detalles</h6>
                <small className="text-muted">Información adicional</small>
              </div>
              <span className="badge bg-success">$200</span>
            </div>
            <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Detalles</h6>
                <small className="text-muted">Información adicional</small>
              </div>
              <span className="badge bg-success">$200</span>
            </div>
            <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Detalles</h6>
                <small className="text-muted">Información adicional</small>
              </div>
              <span className="badge bg-success">$200</span>
            </div>
            <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Detalles</h6>
                <small className="text-muted">Información adicional</small>
              </div>
              <span className="badge bg-success">$200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
//   <div className="container">
//     <div className="row">
//       <form className="bg-white shadow rounded-3 p-4 row g-3">
//         <div className="col-12 col-md-6 col-lg-4">
//           <label htmlFor="inputAmount" className="form-label fw-bold">
//             Monto
//           </label>
//           <input
//             type="number"
//             id="inputAmount"
//             className="form-control"
//             placeholder="Ingrese monto"
//           />
//         </div>
//         <div className="col-12 col-md-6 col-lg-4">
//           <label htmlFor="inputType" className="form-label fw-bold">
//             Tipo
//           </label>
//           <select
//             id="inputType"
//             className="form-select"
//             aria-label="Selecciona un tipo"
//           >
//             <option value="">Tipo...</option>
//           </select>
//         </div>
//         <div className="col-12 col-md-6 col-lg-4">
//           <label htmlFor="inputDestino" className="form-label fw-bold">
//             Destino
//           </label>
//           <select
//             id="inputDestino"
//             className="form-select"
//             aria-label="Selecciona un destino"
//           >
//             <option value="">Destino...</option>
//             <option value="bank">Banco</option>
//             <option value="1">Jugador 1</option>
//             <option value="2">Jugador 2</option>
//             <option value="3">Jugador 3</option>
//             <option value="4">Jugador 4</option>
//             <option value="5">Jugador 5</option>
//             <option value="6">Jugador 6</option>
//             <option value="7">Jugador 7</option>
//             <option value="8">Jugador 8</option>
//           </select>
//         </div>
//         <div className="col-12 d-flex justify-content-end">
//           <button type="submit" className="btn btn-success col">
//             Confirmar
//           </button>
//         </div>
//       </form>

//     </div>
//   </div>
// );
