const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.jump-title').forEach(el => observer.observe(el));




  const mobileNav = document.getElementById('mobileNav');

  function toggleMobileMenu() {
    if (mobileNav.style.display === 'flex') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'flex';
    }
  }

  function closeMobileMenu() {
    mobileNav.style.display = 'none';
  }

  // Optional: close menu when clicked outside
  window.addEventListener('click', function (e) {
    if (!e.target.closest('.mobile-menu-toggle') && !e.target.closest('.mobile-nav')) {
      closeMobileMenu();
    }
  });






function sendMail(e) {
     e.preventDefault(); 
    var params = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        email: document.getElementById("email").value

    }
    console.log(params)
    const serviceID = "service_sy0ui5s"
    const templateID = "template_m9ryaxl"
    emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById("name").value="";
            document.getElementById("message").value="";
            document.getElementById("email").value="";
            console.log(res);
            alert("Data Transfered Successfully");
    }).catch((err)=>console.log(err))
}