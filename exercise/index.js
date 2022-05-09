// IIFE (Immediately Invoked Function Expression) - to allow the use of async/await on the top level
// IIFE ( Immediately Invoked Function Expression ) - om async/await te kunnen gebruiken in 'de top level'
(async () => {
  let routes = [];
  const fetchRoutes = async () => {
    routes = await fetch(
      "https://opendata.visitflanders.org/accessibility/routes/info_about_routes_v2.json"
      ).then((res) => res.json());
    };
    await fetchRoutes();
    
    // From this point on, routes is a populated array
    // Vanaf hier is routes een array met data

    //proceduraal
    routes.forEach((route) => {
      const newRouteElement = document.querySelector('#route-template').content.cloneNode(true);
      
      const name = newRouteElement.querySelector('.name')
      name.innerText = route.name;
      
      const img = document.createElement('img');
      const subtype = route.sub_type;
      if(subtype === "CYCLING_LOOP"){
        img.src ="../img/cycling.png";
      } else if(subtype === "HIKING_LOOP" || subtype === "HIKING_THEMATIC_ROUTE"){
        img.src = "../img/hiking.png";
      } else {
        img.style.display = "none";
      }
      img.classList.add('icon');
      name.appendChild(img);
      const beschrijving = newRouteElement.querySelector('#omschrijvingsspan');
      beschrijving.innerText = route.accessibility_description;
      
    const location =  newRouteElement.querySelector('#location span');
    location.innerText = route.city_name;

    const websiteP = newRouteElement.querySelector('#website');
    const websiteLink = newRouteElement.querySelector('#website a');
    const websiteFetch = route.website;
    if (websiteFetch === ""){
      websiteP.style.display = "none";
    } else {
      websiteLink.innerText = websiteFetch;
      websiteLink.href = `mailto:${websiteFetch}`;
      websiteP.style.overflow = "hidden";
    }

    const emailP = newRouteElement.querySelector('#email');
    const emailLink = newRouteElement.querySelector('#email a');
    const emailFetch = route.email;
    if (emailFetch === ""){
      emailP.style.display = "none";
    } else {
      emailLink.innerText = emailFetch;
      emailLink.href = emailFetch;
      emailLink.style.overflow = "hidden";
    }
    const filteredRoutes = routes.filter(route => route.website === '')
    console.log(filteredRoutes);

    document.querySelector('#routes').appendChild(newRouteElement);})
    
    
   

  
})();
