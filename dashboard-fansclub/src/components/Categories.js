import React from "react";
import { useState, useEffect } from "react";

function Categories() {

    const [categoriasDB, setCategoriasDB] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/countProducts")
		.then(response => response.json())
		.then(data => {
			setCategoriasDB(data.countByCategory)
            console.log(data.countByCategory);
		})
		.catch(error => {
			console.log(error);
		})
	}, [])

    return(
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                            {categoriasDB.map((item, i) => (
                                <div>
                                    <p key={item + i}>{item.nombre + ": " +item.count}</p>
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

export default Categories;