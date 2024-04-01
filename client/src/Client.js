import React, { Component } from "react";

class Client extends Component {
  render() {
    // Endpoints
    const endpointOfertasGet = "https://lizard-project-server.vercel.app/api/oferta";
    const endpointAdmisionesGet = "https://lizard-project-server.vercel.app/api/admision";
    const endpointProfesoresGet = "https://lizard-project-server.vercel.app/api/profesores";
    const endpointProfesoresGetById = "https://lizard-project-server.vercel.app/api/profesores/:profesorId";

    // Respuestas de la API
    const responseDataProfesoresGet = [
    {
        "_id": "66088620cca07a0771dcb066",
        "nombre": "marlene",
        "apellidos": "Fonseca",
        "numeroEmpleado": "203",
        "correo": "marresf@gmail.com",
        "fechaNacimiento": "2004-12-03T06:00:00.000Z",
        "createdAt": "2024-03-30T21:37:36.531Z",
        "updatedAt": "2024-03-30T21:37:36.531Z"
    },
    {
        "_id": "66088a614924c74acc1ea742",
        "nombre": "Juan",
        "apellidos": "González",
        "numeroEmpleado": "301",
        "correo": "juan.gonzalez@example.com",
        "fechaNacimiento": "1990-05-15T00:00:00.000Z",
        "createdAt": "2024-03-30T21:55:45.990Z",
        "updatedAt": "2024-03-30T21:55:45.990Z"
    },
    {
        "_id": "66088a6c4924c74acc1ea747",
        "nombre": "María",
        "apellidos": "López",
        "numeroEmpleado": "302",
        "correo": "maria.lopez@example.com",
        "fechaNacimiento": "1985-09-20T00:00:00.000Z",
        "createdAt": "2024-03-30T21:55:56.727Z",
        "updatedAt": "2024-03-30T21:55:56.727Z"
    },
    {
        "_id": "66088a734924c74acc1ea74c",
        "nombre": "Pedro",
        "apellidos": "Martínez",
        "numeroEmpleado": "303",
        "correo": "pedro.martinez@example.com",
        "fechaNacimiento": "1978-03-10T00:00:00.000Z",
        "createdAt": "2024-03-30T21:56:03.484Z",
        "updatedAt": "2024-03-30T21:56:03.484Z"
    },
    {
        "_id": "66088a794924c74acc1ea751",
        "nombre": "Ana",
        "apellidos": "Sánchez",
        "numeroEmpleado": "304",
        "correo": "ana.sanchez@example.com",
        "fechaNacimiento": "1995-11-25T00:00:00.000Z",
        "createdAt": "2024-03-30T21:56:09.525Z",
        "updatedAt": "2024-03-30T21:56:09.525Z"
    }
    ];


    const responseDataProfesoresGetById = [
      {
          "_id": "66088a794924c74acc1ea751",
          "nombre": "Ana",
          "apellidos": "Sánchez",
          "numeroEmpleado": "304",
          "correo": "ana.sanchez@example.com",
          "fechaNacimiento": "1995-11-25T00:00:00.000Z",
          "createdAt": "2024-03-30T21:56:09.525Z",
          "updatedAt": "2024-03-30T21:56:09.525Z"
      }
    ];

    const response400ProfesoresById = [
      {
        "message": "ID de profesor inválido"
      }
    ];

    const response404ProfesoresById = [
      {
        "message": "El ID no corresponde a ningún profesor"
      }
    ];

    const response500ProfesoresById = [
      {
        "message": "Error en el servidor"
      }
    ];


    const responseDataOfertasGet = [
      {
          "_id": "65f21676e1fe9db7504a6b65",
          "nombre": "Des soft",
          "activo": true,
          "createdAt": "2024-03-13T21:11:18.240Z",
          "updatedAt": "2024-03-13T21:11:18.240Z"
      }
  ];


    const responseDataAdmisionesGet = [
      {
        "_id": "65efbb33a93cc12a936991dc",
        "nombre": "tecnologia ambiental",
        "activo": false,
        "createdAt": "2024-03-12T02:17:23.467Z",
        "updatedAt": "2024-03-12T02:17:23.467Z"
    },
    {
        "_id": "65efbd62a93cc12a936991df",
        "nombre": "tecnologia ambiental",
        "activo": false,
        "createdAt": "2024-03-12T02:26:42.899Z",
        "updatedAt": "2024-03-12T02:26:42.899Z"
    },
    {
        "_id": "65f20c82a49afef87d954b0b",
        "nombre": "DEs softw",
        "activo": true,
        "createdAt": "2024-03-13T20:28:50.747Z",
        "updatedAt": "2024-03-13T20:28:50.747Z"
    },
    {
        "_id": "65f20c88a49afef87d954b0d",
        "nombre": "DEs softw232121",
        "activo": true,
        "createdAt": "2024-03-13T20:28:56.482Z",
        "updatedAt": "2024-03-13T20:28:56.482Z"
    },
    {
        "_id": "65f21177c3906b2fd03cb7ed",
        "nombre": "prod1",
        "activo": true,
        "createdAt": "2024-03-13T20:49:59.480Z",
        "updatedAt": "2024-03-13T20:49:59.480Z"
    },
    {
        "_id": "66031f0be59e9b5d818cfdb6",
        "nombre": "admitido",
        "activo": true,
        "createdAt": "2024-03-26T19:16:27.586Z",
        "updatedAt": "2024-03-26T19:16:27.586Z"
    },
    {
        "_id": "66031f4ce59e9b5d818cfdbb",
        "nombre": "admitido",
        "activo": true,
        "createdAt": "2024-03-26T19:17:32.081Z",
        "updatedAt": "2024-03-26T19:17:32.081Z"
    }
    ];

    return (
      <div className="container mx-auto mt-8">
        {/* Bloque de Profesores */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-4">Obtener profesores</h2>
          <p className="text-center text-gray-600 mb-4">Con el siguiente endpoint puedes acceder a todos los profesores</p>
          <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
            <p className="text-center"><a href={endpointProfesoresGet} className="text-blue-500 font-bold no-underline">{endpointProfesoresGet}</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Response code: 200</h3>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(responseDataProfesoresGet, null, 2)}</pre>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-4">Obtener profesor por ID</h2>
          <p className="text-center text-gray-600 mb-4">Con el siguiente endpoint puedes acceder a un profesor en especifico dado su ID</p>
          <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
            <p className="text-center"><a href={endpointProfesoresGetById} className="text-blue-500 font-bold no-underline">{endpointProfesoresGetById}</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Response code: 200</h3>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(responseDataProfesoresGetById, null, 2)}</pre>
            </div>
          </div>
        </div>
        {/* Bloque Errores Profesor por ID */}
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Response code: 400 </h3>
        <p className="text-center text-gray-600 mb-4">Si el ID no contiene los 24 caracteres solicitados, se nos generará el siguiente error</p>
          <div>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(response400ProfesoresById, null, 2)}</pre>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Response code: 404 </h3>
        <p className="text-center text-gray-600 mb-4">Si el ID contiene los 24 caracteres, pero es incorrecto o no existe, el profesor tampoco, se nos generará el siguiente error</p>
          <div>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(response404ProfesoresById, null, 2)}</pre>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Response code: 500 </h3>
        <p className="text-center text-gray-600 mb-4">Si hay errores internos en el servidor se producirá el siguiente error</p>
          <div>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(response500ProfesoresById, null, 2)}</pre>
            </div>
          </div>
        </div>
        

        {/* Bloque de Ofertas */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-4">Obtener Ofertas Educativas</h2>
          <p className="text-center text-gray-600 mb-4">Con el siguiente endpoint puedes acceder a todas las ofertas educativas</p>
          <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
            <p className="text-center"><a href={endpointOfertasGet} className="text-blue-500 font-bold no-underline">{endpointOfertasGet}</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Respuesta:</h3>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(responseDataOfertasGet, null, 2)}</pre>
            </div>
          </div>
        </div>
        
        {/* Bloque de Admisiones */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-4">Obtener Admisiones</h2>
          <p className="text-center text-gray-600 mb-4">Con el siguiente endpoint puedes acceder a todas las admisiones</p>
          <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
            <p className="text-center"><a href={endpointAdmisionesGet} className="text-blue-500 font-bold no-underline">{endpointAdmisionesGet}</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Respuesta:</h3>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(responseDataAdmisionesGet, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;




/*import React, { Component } from "react";

class Client extends Component {
  render() {
    return (
      <div>
        <h3>SPA App - Contact</h3>
        <p>Please feel free to contact us with any questions or inquiries you may have. We are always happy to help!</p>
        <h4>Contact Details:</h4>
        <ul>
        <li><strong>Email:</strong> info@example.com</li>
        <li><strong>Phone:</strong> 1-800-555-1234</li>
        <li><strong>Address:</strong> 123 Main St, Anytown USA</li>
        </ul>
      </div>
    );
  }
}

export default Client;*/