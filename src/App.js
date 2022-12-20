import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
// import Login from "./Login";
// import Payment from "./Payment";
// import Orders from "./Orders";
// import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import {loadStripe} from '@stripe/stripe-js';

// const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');



function App() {

  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

  return (
    <Router>
     <div className="app">
      <Routes>

      <Route exact path="/orders" 
           element={(
            <>
            <Header />
            {/* <Orders /> */}
            </>
              )}
          />

          <Route exact path="/" 
           element={(
            <>
            <Header />
            <Home />
            </>
              )}
          />

          <Route exact path="/login" 
           element={(
            <>
            <login/>
            </>
            )}
          />

          <Route exact path="/Checkout" 
           element={(
            <>
            <Header />
            <Checkout/>
            </>
            )}
          />
          
          {/* <Route exact path="/payment" 
           element={(
            <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </> */}
      </Routes>
     </div>
    </Router>
    
  );
}

export default App;
