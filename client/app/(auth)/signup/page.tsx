export const metadata = {
  title: "Sign Up - Open PRO",
  description: "Page description",
};

// Respuestas de la API

const response400ProfesoresById = [
  {
    message: "ID de profesor inválido",
  },
];

const response404ProfesoresById = [
  {
    message: "El ID no corresponde a ningún profesor",
  },
];

const response500ProfesoresById = [
  {
    message: "Error en el servidor",
  },
];

const response400OfertaById = [
  {
    message: "ID de oferta educativa inválido",
  },
];

const response404OfertaById = [
  {
    message: "Oferta educativa no encontrada",
  },
];

const response500OfertaById = [
  {
    message: "Error en el servidor",
  },
];

const response400AdmisionById = [
  {
    message: "ID de admisión inválido",
  },
];

const response404AdmisionById = [
  {
    message: "Admisión no encontrada",
  },
];

const response500AdmisionById = [
  {
    message: "Error en el servidor",
  },
];

import Link from "next/link";

export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">En esta sección iran los errores</h1>
          </div>

          {/* Bloque Errores Profesor por ID */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 400 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si el ID no contiene los 24 caracteres solicitados, se nos
              generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response400ProfesoresById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 404 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si el ID contiene los 24 caracteres, pero es incorrecto o no
              existe, el profesor tampoco, se nos generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response404ProfesoresById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 500 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si hay errores internos en el servidor se producirá el siguiente
              error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500ProfesoresById, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Errores Oferta por ID */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 400 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si el ID no contiene los 24 caracteres solicitados, se nos
              generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response400OfertaById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 404 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si el ID contiene los 24 caracteres, pero es incorrecto o no
              existe, la oferta tampoco, se nos generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response404OfertaById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 500 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si hay errores internos en el servidor se producirá el siguiente
              error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500OfertaById, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Errores Admision por ID */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 400 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si el ID no contiene los 24 caracteres solicitados, se nos
              generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response400AdmisionById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 404 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si el ID contiene los 24 caracteres, pero es incorrecto o no
              existe, la admision tampoco, se nos generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response404AdmisionById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Response code: 500 </h3>
            <p className="text-center text-gray-600 mb-4">
              Si hay errores internos en el servidor se producirá el siguiente
              error
            </p>
            <div>
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500AdmisionById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
