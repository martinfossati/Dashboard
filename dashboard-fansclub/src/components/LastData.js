import React from "react";
import { useState, useEffect } from "react";

function LastData(props) {

	const [ultimoProducto, setUltimoProducto] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/countProducts")
		.then(response => response.json())
		.then(data => {
			setUltimoProducto(data.products[data.products.length - 1])
			console.log(data.products[data.products.length - 1]);
		})
	}, [])

    return(
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Ultimo {props.nombre} en la base de datos</h6>
				</div>
				<div className="card-body">
				    <div className="text-center">
					    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={`http://www.localhost:3001/images/${props.carpeta}/${props.imagen}`} alt=""/>
					</div>
					<p>Nombre: {props.ultimoNombre}</p>
					<p style={{display: props.noMostrarProducto ? 'none' : 'block' }}>Precio: $ {props.precio}</p>
					<p style={{display: props.noMostrar ? 'none' : 'block' }}>Apellido: {props.apellido}</p>
					<p style={{display: props.noMostrarProducto ? 'none' : 'block' }}>Descripción: {props.descripcion}</p>
					<p style={{display: props.noMostrar ? 'none' : 'block' }}>Fecha de nacimiento: {props.fecha}</p>
					<a target="_blank" rel="nofollow" href="/">View {props.nombre} detail</a>
				</div>
			</div>
		</div>
    )
}

export default LastData;