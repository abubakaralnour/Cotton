function Navebar() {
  return (
    <div className="nav">
      <ul>
        <li className="nav-item-help">
          <span>مساعدة</span>
          <div className="dropdown-help">
            <a href="/help#flower-care">Flower Care</a>
            <a href="/help#help-center">Help Center</a>
          </div>
        </li>
        <li>الرئيسية</li>
        <li>من نحن</li>
        <li>اتصل بنا</li>
        <li>المعرض</li>
        <li>مواعيدي المحجوزة</li>



      </ul>
    </div>
  );
}

export default Navebar;
