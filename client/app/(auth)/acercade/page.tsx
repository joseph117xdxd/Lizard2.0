export const metadata = {
  title: "Acerca de",
  description: "Información",
};

// Endpoints
const endpointOfertasGet =
  "https://lizard-project-server.vercel.app/api/oferta";
const endpointAdmisionesGet =
  "https://lizard-project-server.vercel.app/api/admision";

const endpointSignUpUser =
  "https://lizard-project-server.vercel.app/api/auth/signup";

const endpointSignInUser =
  "https://lizard-project-server.vercel.app/api/auth/signin";

const endpointProfesoresGet =
  "https://lizard-project-server.vercel.app/api/profesores";
const endpointProfesoresGetById =
  "https://lizard-project-server.vercel.app/api/profesores/:profesorId";
const endpointOfertaGetById =
  "https://lizard-project-server.vercel.app/api/oferta/:ofertaId";
const endpointAdmisionGetById =
  "https://lizard-project-server.vercel.app/api/admision/:admisionId";

// Respuestas de la API
const responseDataProfesoresGet = [
  {
    _id: "66088620cca07a0771dcb066",
    nombre: "marlene",
    apellidos: "Fonseca",
    numeroEmpleado: "203",
    correo: "marresf@gmail.com",
    fechaNacimiento: "2004-12-03T06:00:00.000Z",
    createdAt: "2024-03-30T21:37:36.531Z",
    updatedAt: "2024-03-30T21:37:36.531Z",
  },
  {
    _id: "66088a614924c74acc1ea742",
    nombre: "Juan",
    apellidos: "González",
    numeroEmpleado: "301",
    correo: "juan.gonzalez@example.com",
    fechaNacimiento: "1990-05-15T00:00:00.000Z",
    createdAt: "2024-03-30T21:55:45.990Z",
    updatedAt: "2024-03-30T21:55:45.990Z",
  },
  {
    _id: "66088a6c4924c74acc1ea747",
    nombre: "María",
    apellidos: "López",
    numeroEmpleado: "302",
    correo: "maria.lopez@example.com",
    fechaNacimiento: "1985-09-20T00:00:00.000Z",
    createdAt: "2024-03-30T21:55:56.727Z",
    updatedAt: "2024-03-30T21:55:56.727Z",
  },
  {
    _id: "66088a734924c74acc1ea74c",
    nombre: "Pedro",
    apellidos: "Martínez",
    numeroEmpleado: "303",
    correo: "pedro.martinez@example.com",
    fechaNacimiento: "1978-03-10T00:00:00.000Z",
    createdAt: "2024-03-30T21:56:03.484Z",
    updatedAt: "2024-03-30T21:56:03.484Z",
  },
  {
    _id: "66088a794924c74acc1ea751",
    nombre: "Ana",
    apellidos: "Sánchez",
    numeroEmpleado: "304",
    correo: "ana.sanchez@example.com",
    fechaNacimiento: "1995-11-25T00:00:00.000Z",
    createdAt: "2024-03-30T21:56:09.525Z",
    updatedAt: "2024-03-30T21:56:09.525Z",
  },
];

const responseDataProfesoresGetById = [
  {
    _id: "66088a794924c74acc1ea751",
    nombre: "Ana",
    apellidos: "Sánchez",
    numeroEmpleado: "304",
    correo: "ana.sanchez@example.com",
    fechaNacimiento: "1995-11-25T00:00:00.000Z",
    createdAt: "2024-03-30T21:56:09.525Z",
    updatedAt: "2024-03-30T21:56:09.525Z",
  },
];

const responseDataOfertaGet = [
  {
    _id: "660b64ab6ac256bb1f621c3f",
    nombre: "Gestión y Desarrollo de Software",
    activo: true,
    createdAt: "2024-04-02T01:51:39.622Z",
    updatedAt: "2024-04-02T01:51:39.622Z",
  },
  {
    _id: "660b64bf6ac256bb1f621c41",
    nombre: "Automatización",
    activo: true,
    createdAt: "2024-04-02T01:51:59.390Z",
    updatedAt: "2024-04-02T01:51:59.390Z",
  },
];

const responseDataOfertaGetById = [
  {
    _id: "660b64ab6ac256bb1f621c3f",
    nombre: "Gestión y Desarrollo de Software",
    activo: true,
    createdAt: "2024-04-02T01:51:39.622Z",
    updatedAt: "2024-04-02T01:51:39.622Z",
  },
];

const responseDataAdmisionesGet = [
  {
    _id: "65efbb33a93cc12a936991dc",
    nombre: "tecnologia ambiental",
    activo: false,
    createdAt: "2024-03-12T02:17:23.467Z",
    updatedAt: "2024-03-12T02:17:23.467Z",
  },
  {
    _id: "65efbd62a93cc12a936991df",
    nombre: "tecnologia ambiental",
    activo: false,
    createdAt: "2024-03-12T02:26:42.899Z",
    updatedAt: "2024-03-12T02:26:42.899Z",
  },
  {
    _id: "65f20c82a49afef87d954b0b",
    nombre: "DEs softw",
    activo: true,
    createdAt: "2024-03-13T20:28:50.747Z",
    updatedAt: "2024-03-13T20:28:50.747Z",
  },
  {
    _id: "65f20c88a49afef87d954b0d",
    nombre: "DEs softw232121",
    activo: true,
    createdAt: "2024-03-13T20:28:56.482Z",
    updatedAt: "2024-03-13T20:28:56.482Z",
  },
  {
    _id: "65f21177c3906b2fd03cb7ed",
    nombre: "prod1",
    activo: true,
    createdAt: "2024-03-13T20:49:59.480Z",
    updatedAt: "2024-03-13T20:49:59.480Z",
  },
  {
    _id: "66031f0be59e9b5d818cfdb6",
    nombre: "admitido",
    activo: true,
    createdAt: "2024-03-26T19:16:27.586Z",
    updatedAt: "2024-03-26T19:16:27.586Z",
  },
  {
    _id: "66031f4ce59e9b5d818cfdbb",
    nombre: "admitido",
    activo: true,
    createdAt: "2024-03-26T19:17:32.081Z",
    updatedAt: "2024-03-26T19:17:32.081Z",
  },
];

const responseDataAdmisionGetById = [
  {
    _id: "65efbb33a93cc12a936991dc",
    nombre: "tecnologia ambiental",
    activo: false,
    createdAt: "2024-03-12T02:17:23.467Z",
    updatedAt: "2024-03-12T02:17:23.467Z",
  },
];

const signUpData = [
  {
    username: "lizardino",
    password: "12345",
    email: "lizardchido20@gmail.com",
    roles: ["admin", "moderador"],
  },
];

const signInData = [
  {
    email: "lizardchido20@gmail.com",
    password: "12345",
  },
];

const tokengenerado = [
  {
    generatedToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDMxZDk2M2NmNTQ4OTEwOGEwOGU3OCIsImlhdCI6MTcxMjM2ODE5MCwiZXhwIjoxNzEyNDExMzkwfQ._wHrW_XEXfgD_XElcZNSrEnZzILD5mFJeFaoqaQVSQg",
  },
];

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              Bienvenido! ¿Quieres saber cómo usar nuestra API?
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              En esta sección podrás encontrar los modulos Oferta Educativa,
              Admisión y Profesores, los cuales se mostrarán para obtener toda
              la lista de cada uno así como de forma individual de acuerdo a su
              ID.
            </p>
          </div>
          {/* Instroduction section*/}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3">Primeros pasos...</h3>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              La documentación que encontrarás te ayudará a familiarizarte con
              nuestra API, en primera instancia el orden en la que encontrarás
              esta informacion es:{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                Profesores, Oferta Educativa y Admisiones.
              </strong>
              Cada una obteniendo la lista completa de los objetos así como por
              su ID, recuerda revisar bien los encabezados para saber que
              información quieres visualizar. En esta sección solo se muestra
              los resultados de status{" "}
              <strong className="font-semibold text-green-400 green:text-green">
                {" "}
                200
              </strong>{" "}
              .
            </p>
          </div>

          {/* Tabla de esquema de datos USUARIO */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-15">
            <h3 className="h3">Esquema de datos USUARIO</h3>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Key
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Data Type
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
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Username
                  </th>
                  <td className="px-6 py-4">String</td>
                  <td className="px-6 py-4">El username del usuario</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Password
                  </th>
                  <td className="px-6 py-4">String</td>
                  <td className="px-6 py-4">Contraseña que el usuario desee</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Email
                  </th>
                  <td className="px-6 py-4">String</td>
                  <td className="px-6 py-4">
                    Correo con el que el usuario desee registrarse
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Roles
                  </th>
                  <td className="px-6 py-4">array</td>
                  <td className="px-6 py-4">Roles asignados al usuario</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bloque de Usuario */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Sign Up Usuario
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes registrarte a la API,
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointSignUpUser}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointSignUpUser}
                </a>
              </p>
            </div>
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>

              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {" "}
                  {JSON.stringify(signUpData, null, 2)}
                </pre>
              </div>
              <p className="text-center text-gray-600 mb-4">
                Los roles son opcionales se puede dejar el array vacio o no
                poner roles le asiganra un usuario normal por defecto{" "}
              </p>
            </div>
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                Respuesta
              </div>

              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">"Successfully saved user"</pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Sign In Usuario con AUTH y JWT
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes ingresar a la API
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointSignInUser}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointSignInUser}
                </a>
              </p>
            </div>
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>

              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {" "}
                  {JSON.stringify(signInData, null, 2)}
                </pre>
              </div>
            </div>
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                Respuesta
              </div>

              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {" "}
                  {JSON.stringify(tokengenerado, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Tabla de los status OK */}
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

          {/* Bloque de Profesores */}
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
            <div>
              <div className="iConline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                Respuesta
              </div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataProfesoresGet, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener profesor por ID
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a un profesor en
              especifico dado su ID
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
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataProfesoresGetById, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque de Ofertas */}
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
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>{" "}
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataOfertaGet, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener oferta por ID
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a una oferta especifico
              dado su ID
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href={endpointOfertaGetById}
                  className="text-blue-500 font-bold no-underline"
                >
                  {endpointOfertaGetById}
                </a>
              </p>
            </div>
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>{" "}
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataOfertaGetById, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Bloque de Admisiones */}
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
            <div>
              <div className="iConline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
                Respuesta
              </div>
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataAdmisionesGet, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Obtener admision por ID
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a una admision en
              especifico dado su ID
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
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>{" "}
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataAdmisionGetById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          {/* CREACION DE ADMISION */}
          <div className="bg-blue p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              Creación de admision
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Con el siguiente endpoint puedes acceder a una admision en
              especifico dado su ID
            </p>
            <div className="bg-gray-600 p-4 rounded-md shadow-md mb-4">
              <p className="text-center">
                <a
                  href="https://lizard-project-server.vercel.app/api/admision/"
                  className="text-blue-500 font-bold no-underline"
                >
                  Aqui va el URL del de admision para dar de alta
                </a>
              </p>
            </div>
            <div>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Request code: 200
              </div>{" "}
              <div className="bg-gray-600 p-4 rounded-md shadow-md">
                <pre className="overflow-x-auto">
                  {JSON.stringify(responseDataAdmisionGetById, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
