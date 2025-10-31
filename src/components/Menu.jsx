return(
    <div id="menuImageContainer">
          <h2>{menuImages[menuImage].name}</h2>
          <h3>$ {menuImages[menuImage].price}</h3>
          <img
            src={menuImages[menuImage].imageSrc}
            alttext={menuImages[menuImage].altText}
          />
        </div>
  )
