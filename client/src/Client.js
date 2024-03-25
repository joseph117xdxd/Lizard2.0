import React, { Component } from "react";

class Client extends Component {
  render() {
    // Endpoints
    const endpointOfertasGet = "https://lizard-project-server.vercel.app/api/oferta";
    const endpointAdmisionesGet = "https://lizard-project-server.vercel.app/api/admision";
    const endpointProfesoresGet = "https://lizard-project-server.vercel.app/api/profesores";

    // Respuestas de la API
    const responseDataProfesoresGet = [
      {
        "_id": "65fe375052c157e7c9c39f5a",
        "name": "Producto 1",
        "price": 12000,
        "category": "Nolose",
        "imgURL": "https://store.storeimages.cdn-apple.com/",
        "createdAt": "2024-03-23T01:58:40.264Z",
        "updatedAt": "2024-03-23T01:58:40.264Z"
      },
      {
        "_id": "65fe375852c157e7c9c39f5f",
        "name": "Producto 2",
        "price": 12000,
        "category": "Nolose 2",
        "imgURL": "https://store.storeimages.cdn-apple.com/",
        "createdAt": "2024-03-23T01:58:48.234Z",
        "updatedAt": "2024-03-23T01:58:48.234Z"
      },
      {
        "_id": "65fe376152c157e7c9c39f64",
        "name": "Producto 3",
        "price": 12000,
        "category": "Nolose 3",
        "imgURL": "https://store.storeimages.cdn-apple.com/",
        "createdAt": "2024-03-23T01:58:57.553Z",
        "updatedAt": "2024-03-23T01:58:57.553Z"
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
        "_id": "65fe375052c157e7c9c39f5a",
        "name": "Producto 1",
        "price": 12000,
        "category": "Nolose",
        "imgURL": "https://store.storeimages.cdn-apple.com/",
        "createdAt": "2024-03-23T01:58:40.264Z",
        "updatedAt": "2024-03-23T01:58:40.264Z"
      },
      {
        "_id": "65fe375852c157e7c9c39f5f",
        "name": "Producto 2",
        "price": 12000,
        "category": "Nolose 2",
        "imgURL": "https://store.storeimages.cdn-apple.com/",
        "createdAt": "2024-03-23T01:58:48.234Z",
        "updatedAt": "2024-03-23T01:58:48.234Z"
      },
      {
        "_id": "65fe376152c157e7c9c39f64",
        "name": "Producto 3",
        "price": 12000,
        "category": "Nolose 3",
        "imgURL": "https://store.storeimages.cdn-apple.com/",
        "createdAt": "2024-03-23T01:58:57.553Z",
        "updatedAt": "2024-03-23T01:58:57.553Z"
      }
    ];

    return (
      <div className="container mx-auto mt-8">
        {/* Bloque de Profesores */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-4">Obtener Profesores</h2>
          <p className="text-center text-gray-600 mb-4">Con el siguiente endpoint puedes acceder a todos los Profesores</p>
          <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
            <p className="text-center"><a href={endpointProfesoresGet} className="text-blue-500 font-bold no-underline">{endpointProfesoresGet}</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Respuesta:</h3>
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <pre className="overflow-x-auto">{JSON.stringify(responseDataProfesoresGet, null, 2)}</pre>
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