function Navebar() {
  return (
    <div className="nav">
      <ul>
        <li className="nav-item-help">
          <span>Help</span>
          <div className="dropdown-help">
            <a href="/help#flower-care">Flower Care</a>
            <a href="/help#help-center">Help Center</a>
          </div>
        </li>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default Navebar;
