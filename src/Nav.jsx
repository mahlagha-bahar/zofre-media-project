import React from "react";
export default function Nav() {
  return (
    <div className="green-box">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            تماس با ما
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            درباره ما
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            اخبار
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            فروشگاه
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            محصولات
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           خانه
          </a>
        </li>
      </ul>
    </div>
  );
}
