import React, { useState } from "react";

function FormularioProforma() {
  const [status, setStatus] = useState(null);
  const [links, setLinks] = useState({ pdf: "", excel: "" });

  const enviarSolicitud = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("/api/proforma", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setStatus(data.message);
    setLinks(data.download_links);
  };

  return (
    <div>
      <form onSubmit={enviarSolicitud}>
        <input name="nombre" placeholder="Nombre completo" required />
        <input name="telefono" placeholder="Teléfono" required />
        <input name="correo" placeholder="Correo electrónico" required />
        <input name="servicio" placeholder="Servicio" required />
        <input name="horas" type="number" placeholder="Horas estimadas" required />
        <input name="complejidad" placeholder="Complejidad" required />
        <input name="precio" type="number" placeholder="Precio total" required />
        <button type="submit">Enviar Solicitud</button>
      </form>

      {status && (
        <div>
          <p>{status}</p>
          <a href={links.pdf} download>Descargar PDF</a>
          <a href={links.excel} download>Descargar Excel</a>
        </div>
      )}
    </div>
  );
}

export default FormularioProforma;
