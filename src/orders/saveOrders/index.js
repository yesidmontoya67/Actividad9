import React, {useState, useEffect} from "react";

function saveOrder(body){
    return window.fetch("http://localhost:28080/api/v1/products",{
        method:"POST",
        body: JSON.stringify(body),
        headers:{
            "content-type": "application/json;charset=UTF-8",        
        }
}).then(response => response.json());
}

const SaveOrder = () => {
    const [order,setOrders]= useState(null);
  
    const handleSubmit=event=>{
        event.preventDefault();
        const nameImput= event.target.elements.name;
        const descriptionImput= event.target.elements.description;
        const basePriceImput= event.target.elements.basePrice;
        const taxRateImput= event.target.elements.taxRate;
        const statusImput= event.target.elements.status;
        const quantityImput= event.target.elements.quantity;
        const body={
            name : nameImput.value,
            description : descriptionImput.value,
            basePrice:basePriceImput.value,
            taxRate:taxRateImput.value,
            productStatus: statusImput.value,
            inventoryQueantity: quantityImput.value
        }        
        saveOrder(body).then(ordersData=> {setOrders(ordersData)});
    };

    return (
        <div className="col">        
        <form onSubmit={handleSubmit}>
          <h1>Producto</h1>
          <div className="form-group">
          <label>Name</label>		
          <input className="form-control" type="text" name="name" maxLength="100" required/>
          </div>		
          
          <div className="form-group">
          <label>Description</label>		
          <input className="form-control" type="text" name="description" maxLength="280" required/>
          </div>		
          
          <div className="form-group">
          <label>Base Price</label>		
          <input className="form-control" type="number"  min="0"  name="basePrice" required/>
          </div>		
          
          <div className="form-group">
          <label>Tax Rate</label>
          <input className="form-control" type="number" step="0.1" min="0" max="1" name="taxRate" required/>
          </div>		
          
          <div className="form-group">
          <label>Product Status</label>
          <div className="form-check">
            <div className="form-check">
            <input className="form-check-input" type="radio" name="status" id="borrado" value="BORRADOR" defaultChecked/>
            <label className="form-check-label" >
            BORRADOR
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="status" id="publicad" value="PUBLICADO"/>
            <label className="form-check-label" >
            PUBLICADO
            </label>
            </div>
          </div>
          </div>		
          
          <div className="form-group">
          <label>Inventory Quantity</label>		
          <input className="form-control" type="number" min="0" name="quantity" required/>
          </div>		
          
          <hr/>
          
          <input type="submit" value="Submit" className="btn btn-primary w-25" />
          </form>
          </div>          
    );
};

export default SaveOrder;