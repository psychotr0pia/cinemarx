// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component
import CreateAdmin from "./Components/create-admin.component";
import EditAdmin from "./Components/edit-admin.component";
import AdminList from "./Components/admin-list.component";
import CreatePelicula from "./Components/create-pelicula.component"
// import EditPelicula from "./Components/edit-pelicula.component"
import PeliculaList from "./Components/pelicula-list.component"
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/admin-list"} 
                  className="nav-link">
                  React App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-admin"} 
                    className="nav-link">
                    Create Admin
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/admin-list"} 
                    className="nav-link">
                    Admin List
                  </Link>
                </Nav>

	  	<Nav>
	  	  <Link to={"/create-pelicula"}
	  	    className="nav-link">
	  	    Create pelicula
	  	  </Link>
		</Nav>
	  	
	  	<Nav>
                  <Link to={"/pelicula-list"}
                    className="nav-link">
                    Pelicula List
                  </Link>
                </Nav>

              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={AdminList} />
                  <Route path="/create-admin" component={CreateAdmin} />
                  <Route path="/edit-admin/:rut" component={EditAdmin} />
                  <Route path="/admin-list" component={AdminList} />
	  	  <Route path="/create-pelicula" component={CreatePelicula} />
           	  <Route path="/pelicula-list" component={PeliculaList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;
