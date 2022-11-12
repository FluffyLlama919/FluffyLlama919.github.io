import { Navbar } from "react-bootstrap";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Navbar.Brand className="m-auto">
        <img
          src="/icon.png"
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
          alt="MyMusicBox Logo"
        />
        <span>MyMusicBox</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Nav;
