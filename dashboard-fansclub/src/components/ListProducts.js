import React from "react";
import { useState, useEffect } from "react";

function ListProducts() {

    const [listProducts, setListProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/countProducts")
		.then(response => response.json())
		.then(data => {
			setListProducts(data.products)
		})
		.catch(error => {
			console.log(error);
		})
	}, [])

    return(
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Listado de productos</h6>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                            {listProducts.map((item, i) => (
                                <div>
                                    <p key={item + i}>
                                        {item.nombre} <br/>
                                        $ {item.precio}
                                    </p>
                                    <hr></hr>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )   
}

export default ListProducts;