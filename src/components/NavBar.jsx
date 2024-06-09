import React from 'react';

function NavBar() {
  return (
    <nav class="navbar bg-dark opacity-75 mb-4">
      <div class="container">
        <a
          class="navbar-brand d-flex justify-content-center align-items-center gap-2"
          href="#"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/8832/8832880.png"
            alt="Bootstrap"
            width="30"
            height="24"
          />
          <h3 class="text-light">Bookstore</h3>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
