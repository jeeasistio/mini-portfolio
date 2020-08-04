window.addEventListener("load", () => {
  //   selectors
  let lat;
  let long;
  const temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  const temperatureDegree = document.querySelector(".temperature-degree");
  const locationTimezone = document.querySelector(".location-timezone");
  const icon = document.querySelector(".icon");
  const degreeSection = document.querySelector(".degree-section");
  const span = document.querySelector(".degree-section span");

  //   if location permission available
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e7476b4dbd177f1459c202e98b9f5f24`;

      //       fetch api
      fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const {
          name: timezone,
          wind: {
            deg: degree
          }
        } = data;
        const des = data.weather[0].description;
        const iconPic = data.weather[0].icon;

        //         to celcius
        let celcius = (degree - 32) * (5 / 9);

        //         access DOM
        locationTimezone.textContent = timezone;
        temperatureDegree.textContent = degree;
        temperatureDescription.textContent = des;
        icon.src = `http://openweathermap.org/img/wn/${iconPic}@2x.png`;

        //         convert temperature
        degreeSection.addEventListener("click", () => {
          if (degreeSection.style.animation === "") {
            degreeSection.style.animation = "scaleDown 0.3s ease";
          }

          if (span.textContent === "F") {
            span.textContent = "C";
            temperatureDegree.textContent = celcius.toFixed();
          } else {
            span.textContent = "F";
            temperatureDegree.textContent = degree;
          }
        });

        degreeSection.addEventListener("animationend",
          () => {
            degreeSection.style.animation = "";
          });
      });
    });
  } else {
    alert("Please allow location permission");
  }
});