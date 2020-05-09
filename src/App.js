import React from 'react';
import AllOrders from './orders/index';
import SaveOrder from './orders/saveOrders';
import { Router } from '@reach/router';

const Home = () => (
    <>
    <AllOrders/>
    </>
);

const App= ()  => {    
    return (  
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <Router>
                <Home path="/"/>
                <SaveOrder path="saveorder"/>
            </Router>
           
        </div>  );

        

        
};

export default App;