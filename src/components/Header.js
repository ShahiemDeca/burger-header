import React, { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const onHamburgerClick = () => {
    setIsActive(!isActive);
  };

  const decreaseQuantity = () => {
    if (quantity < 1) return;
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <header className={"header " + (isActive ? "is-active" : "")}>
      <nav class="container">
        <div class="header-logo">
          <img src="logo.png" alt="Logo" />
        </div>

        <div class="header-navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Over</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Aanbiedingen</a>
            </li>
          </ul>
        </div>

        <div class="header-cta">
          <button className="button is-outline" onClick={onHamburgerClick}>
            Bestel nu
          </button>
        </div>
      </nav>

      <div class="container">
        <div class="header-content">
          <h1>Crunchy Burger All Day makes the Pain Go Away</h1>
          <p>
            Lorem ipsum dolor sit met consecteur amendelia aspratti septumdevo
            lipton seth dalimac.
          </p>

          <div class="header-price">
            <span>&euro;20.00</span>
          </div>

          <button className="button" onClick={onHamburgerClick}>
            Bestel nu
          </button>
        </div>

        <div class="header-image">
          <div class="header-burger" onClick={onHamburgerClick}>
            <img
              src="burgertop.png"
              alt="Burger Top"
              class="header-burgerpart"
            />
            <img
              src="burgergreen.png"
              alt="Burger Green"
              class="header-burgerpart"
            />
            <img src="burger.png" alt="Burger" class="header-burgerpart" />
            <img
              src="burgerbottom.png"
              alt="Burger Bottom"
              class="header-burgerpart"
            />
            <img src="leaves.png" alt="Leaves" class="header-leaves" />
          </div>

          <div class="header-burger_information">
            <div class="header-burger_usp">
              <span>Brood</span>
              <span>Uien, Sla & tomaat</span>
              <span>Mosterd en vlees</span>
              <span>Brood</span>
            </div>
          </div>

          <div class="header-burger_quantity">
            <div class="header-burger_quantity-selector">
              <button
                class="header-burger_quantity-button"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                class="header-burger_quantity-button"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button className="button" onClick={onHamburgerClick}>
              Bestel nu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
