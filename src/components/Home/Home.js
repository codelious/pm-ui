import { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <main>
            <h2>Welcome to Plans Manager!</h2>
            <p>You can manage and track monthly plans for your customers.</p>
          </main>
          <nav>
            <Link to='/about'>About</Link>
          </nav>
        </Container>
      </>
    );
  }
}

export default Home;
