   // JavaScript para alternar a classe "expanded" na barra lateral
   const sidebar = document.querySelector('.Sidebar');

   sidebar.addEventListener('mouseenter', () => {
       sidebar.classList.add('expanded');
   });

   sidebar.addEventListener('mouseleave', () => {
       sidebar.classList.remove('expanded');
   });

   // JavaScript para o indicador mágico
   const links = document.querySelectorAll('.Sidebar a');
   const indicator = document.querySelector('.magic-indicator');

   links.forEach((link) => {
       link.addEventListener('click', (e) => {
           links.forEach((otherLink) => {
               otherLink.classList.remove('active-link');
           });
           link.classList.add('active-link');
           const topPosition = link.offsetTop;
           indicator.style.transform = `translateY(${topPosition}px)`;
       });
   });