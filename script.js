document.addEventListener("mousemove", parallax);
function parallax(e){
  this.queriSelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)
    const y = (window.innerHeight - e.pageY*speed)

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
