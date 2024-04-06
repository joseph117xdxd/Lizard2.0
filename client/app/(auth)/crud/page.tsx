export const metadata = {
  title: "CRUD",
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

const response201AltaProfe = [
  {
    "x-access-token": "your_access_token_here",
    "Content-Type": "application/json",
  },
  {
    nombre: "Juan",
    apellidos: "Pérez",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01",
  },
];

const responseMensajeAltaProfe = [
  {
    nombre: "Juan",
    apellidos: "Pérez",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01T00:00:00.000Z",
    _id: "6610e7c80d4f80d8f97a0e2f",
    createdAt: "2024-04-06T06:12:24.605Z",
    updatedAt: "2024-04-06T06:12:24.605Z",
  },
];

const response200CambioProfe = [
  {
    "x-access-token": "your_access_token_here",
    "Content-Type": "application/json",
  },
  {
    nombre: "Juan Ricardo",
    apellidos: "Pérez Guzman",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01",
  },
];

const response200ModificacionProfe = [
  {
    _id: "6610e0d1ce44bf005cc0eb6a",
    nombre: "Juan Ricardo",
    apellidos: "Pérez Guzman",
    numeroEmpleado: "12345",
    correo: "juan@example.com",
    fechaNacimiento: "1980-01-01T00:00:00.000Z",
    createdAt: "2024-04-06T05:42:41.971Z",
    updatedAt: "2024-04-06T05:53:40.920Z",
  },
];

const headersEliminacionProfe = [
  {
    "x-access-token": "your_access_token_here",
    "Content-Type": "application/json",
  },
];

const responseMensajeEliminacionProfe = [
  {
    message: "Profesor eliminado exitosamente",
  },
];

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              ¡En esta sección abarcamos el manejo de CRUD de cada modulo!
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Aqui te indicaremos cómo funcionan los cruds, el alta, el cambio y
              la baja de acuerdo al modulo, así como la estructura de datos
              utilizada para cada uno.
            </p>
          </div>

          {/* Bloque Profesores - Crear */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Creación de un nuevo profesor
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes dar de alta al profesor
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
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para dar de alta es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                POST
              </div>{" "}
              Y colocar lo siguiente en el encabezado y cuerpo para dar de alta:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response201AltaProfe, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 201
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje al ser creado:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeAltaProfe, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Profesores - Editar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Modificar a un profesor
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para modificar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-purple-600 bg-purple-200 rounded-full mb-4">
                PUT
              </div>{" "}
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
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado y cuerpo para su
              edición:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response200CambioProfe, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">Respuesta:</p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(response200ModificacionProfe, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque Profesores - Eliminar */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Eliminar a un profesor
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Recuerda que para modificar es con{" "}
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-200 rounded-full mb-4">
                DELETE
              </div>{" "}
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
            <p className="text-center text-gray-600 mb-4">
              Lo siguiente debe enviarse en el encabezado para su eliminacion:
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(headersEliminacionProfe, null, 2)}
                </pre>
              </div>
            </div>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Request code: 200
            </div>{" "}
            <p className="text-center text-gray-600 mb-4">
              Mensaje que aparecera al ser eliminado:{" "}
            </p>
            <div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseMensajeEliminacionProfe, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
