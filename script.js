function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkScreenWidth, 150);
});

function   verificationWidthScreen() {
    if (window.innerWidth >= 801) {
      hideSidebar();
    }
  }

window.addEventListener('resize', verificationWidthScreen);

verificationWidthScreen();



function scrollToSection(event, id) {
  event.preventDefault();  // Evita que el enlace haga scroll al principio
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

