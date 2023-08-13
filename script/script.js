const balls = document.getElementsByClassName("ball");

document.addEventListener("mousemove", (event) => {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";
  for (let i = 0; i < balls.length; ++i) {
    balls[i].style.transform = `translate(-${x}, -${y})`;
  }
});
