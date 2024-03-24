import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "./axiosInstance"; // Asegúrate de importar la instancia de axios correctamente

function Admin() {
  const { data: ofertasEducativas, isLoading, isError } = useQuery(
    "ofertasEducativas",
    async () => {
      const response = await axiosInstance.get("/api/oferta");
      return response.data;
    }
  );

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al obtener ofertas educativas</div>;

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2">
        Ofertas Educativas - Administrador
      </h3>
      {/* Div para mostrar la solicitud en formato JSON y el objeto JSON */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-2">
          <strong>GET /api/ofertas</strong>
        </h4>
        <h4 className="text-lg font-semibold mb-2">
          Ejemplo de respuesta para obtener todas las ofertas edicativas JSON
        </h4>
        <pre className="overflow-x-auto bg-gray-200 p-2 rounded">
          {JSON.stringify(ofertasEducativas, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Admin;
