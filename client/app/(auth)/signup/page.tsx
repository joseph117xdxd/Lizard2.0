export const metadata = {
  title: "Errores",
  description: "Page description",
};

// Endpoints
const endpointOfertasGet = "https://lizard-server.vercel.app/api/oferta";
const endpointAdmisionesGet = "https://lizard-server.vercel.app/api/admision";

const endpointSignUpUser = "https://lizard-server.vercel.app/api/auth/signup";

const endpointSignInUser = "https://lizard-server.vercel.app/api/auth/signin";

const endpointProfesoresGet = "https://lizard-server.vercel.app/api/profesores";
const endpointProfesoresGetById =
  "https://lizard-server.vercel.app/api/profesores/:profesorId";
const endpointOfertaGetById =
  "https://lizard-server.vercel.app/api/oferta/:ofertaId";
const endpointAdmisionGetById =
  "https://lizard-server.vercel.app/api/admision/:admisionId";

// Respuestas de la API

const response500Profesores = [
  {
    message: "Error en el servidor",
  },
];

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

const response500Ofertas = [
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
            <h1 className="h1">
              En esta sección abarcamos el manejo de errores
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Aqui te indicaremos los errores que puede encontrar, y el porque
              aparece. Eso ayudará a que sepas como resolverlo, y estar atento a
              los datos que estas enviando.
            </p>
          </div>

          {/* Tabla de los status ERROR 404 */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-15">
            <h3 className="h3">HTTPS Status</h3>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Response
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-yellow-400 whitespace-nowrap yellow:text-yellow"
                  >
                    Respuesta
                  </th>
                  <td className="px-6 py-4">OK</td>
                  <td className="px-6 py-4">
                    Obtensión de todos los profesores
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-green-400 whitespace-nowrap green:text-green"
                  >
                    200{" "}
                  </th>
                  <td className="px-6 py-4">OK</td>
                  <td className="px-6 py-4">Todo funciona como es esperado</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bloque Errores Profesores GET */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener Profesores
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a todos los profesores
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointProfesoresGet}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointProfesoresGet}
                </a>
              </p>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 500
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Al querer obtener todos los profesores y el servidor esta caido o
              no disponible, aparece esto:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500Profesores, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Errores Profesor por ID */}
          <>
            <div className="bg-blue p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-center mb-4">
                Obtener Profesore por ID
              </h2>
              <p className="text-center text-gray-600 mb-4">
                Con el siguiente endpoint podras obtener un profesor de acuerdo
                al ID
              </p>
              <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
                <p className="text-center">
                  <a
                    href={endpointProfesoresGetById}
                    className="text-blue-500 font-bold no-underline"
                  >
                    {endpointProfesoresGetById}
                  </a>
                </p>
              </div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                Request code: 403
              </div>{" "}
              <p className="text-center text-gray-600 mb-4">
                Al querer obtener todos los profesores y no cuentas con un token
                generado, aparece el siguiente error:
              </p>
              <div>
                <div className="bg-gray-600 p-4 rounded-md shadow-md">
                  <pre className="overflow-x-auto">
                    {JSON.stringify(response400ProfesoresById, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
            <div className="bg-blue p-8 rounded-lg shadow-md">
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                Request code: 404
              </div>{" "}
              <p className="text-center text-gray-600 mb-4">
                Si el ID contiene los 24 caracteres, pero es incorrecto o no
                existe, el profesor tampoco, se nos generará el siguiente error
              </p>
              <div>
                <div className="bg-gray-600 p-4 rounded-md shadow-md">
                  <pre className="overflow-x-auto">
                    {JSON.stringify(response404ProfesoresById, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
            <div className="bg-blue p-8 rounded-lg shadow-md">
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                Request code: 500
              </div>{" "}
              <p className="text-center text-gray-600 mb-4">
                Si hay errores internos en el servidor se producirá el siguiente
                error
              </p>
              <div>
                <div className="bg-gray-600 p-4 rounded-md shadow-md">
                  <pre className="overflow-x-auto">
                    {JSON.stringify(response500ProfesoresById, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </>

          {/* Bloque Errores Ofertas Educativas GET */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener Ofertas Educativas
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a todas las ofertas
              educativas
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointOfertasGet}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointOfertasGet}
                </a>
              </p>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 500
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Al querer obtener todas las ofertas educativas , podría haber
              error en el server, y esto aparecería:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500Ofertas, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Errores Oferta por ID */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener Oferta Educativa por ID
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a una oferta educativa de
              acuerdo a su ID
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointOfertasGet}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointOfertasGet}
                </a>
              </p>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 400
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Si el ID no contiene los 24 caracteres solicitados, se nos
              generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response400OfertaById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 404
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Si el ID contiene los 24 caracteres, pero es incorrecto o no
              existe, la oferta tampoco, se nos generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response404OfertaById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 500
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Si hay errores internos en el servidor se producirá el siguiente
              error
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500OfertaById, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Errores Ofertas Educativas GET */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener Admisiones
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a todas las admisiones
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointAdmisionesGet}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointAdmisionesGet}
                </a>
              </p>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 500
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Al querer obtener todas las admisiones, podría haber error en el
              server, y esto aparecería:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response500Ofertas, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Errores Admision por ID */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener Admision por ID
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a una admisiones de
              acuerdo al ID que tengas.
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointAdmisionGetById}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointAdmisionGetById}
                </a>
              </p>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 400
            </div>
            <p className="text-center text-gray-600 mb-4">
              Si el ID no contiene los 24 caracteres solicitados, se nos
              generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response400AdmisionById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 404
            </div>
            <p className="text-center text-gray-600 mb-4">
              Si el ID contiene los 24 caracteres, pero es incorrecto o no
              existe, la admision tampoco, se nos generará el siguiente error
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response404AdmisionById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
              Request code: 500
            </div>
            <p className="text-center text-gray-600 mb-4">
              Si hay errores internos en el servidor se producirá el siguiente
              error
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
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
