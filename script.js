// Animate sections on scroll
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        if (scrollTop + windowHeight > sectionTop + 100) {
            section.style.opacity = '1';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const imgAnimateElements = document.querySelectorAll('.img-animate');
    const textAnimateElements = document.querySelectorAll('.text-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(element => observer.observe(element));
    imgAnimateElements.forEach(element => observer.observe(element));
    textAnimateElements.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
});

// =========================prgram_asuh===========================

function openModalAsuh(childName) {
    document.getElementById('childName').textContent = childName;
    document.getElementById('adoptModal').style.display = 'block';
}

function closeModalAsuh() {
    document.getElementById('adoptModal').style.display = 'none';
}

function submitFormAsuh(event) {
    event.preventDefault();
    const childName = document.getElementById('childName').textContent;
    const parentName = document.getElementById('parentName').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    // Di sini kamu bisa menambahkan logika untuk mengirim data form ke server

    alert("Terima kasih, " + parentName + ", telah mengajukan permohonan adopsi untuk " + childName + "!");
    closeModalAsuh();
}

// ===========================Donasi Sembako==============================

function openModalSembako() {
    document.getElementById('donationModal').style.display = 'block';
}

function closeModalSembako() {
    document.getElementById('donationModal').style.display = 'none';
}

// Tutup modal saat pengguna mengklik di luar area modal
window.onclick = function(event) {
    const modal = document.getElementById('donationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'assets/img/eye-icon.png'; // Ganti dengan ikon untuk "lihat"
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'assets/img/eye-icon.png'; // Ganti dengan ikon untuk "sembunyi"
    }
});

function updateDonation(change) {
    var nominalInput = document.getElementById('nominal');
    var currentValue = parseInt(nominalInput.value);
    var newValue = currentValue + (change * 500000); // Increment or decrement by 500,000
    if (newValue >= 500000) { // Ensure the donation amount doesn't go below 500,000
        nominalInput.value = newValue;
    }
}


// ========================hitori========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded'); // Debug: Check if DOM is loaded
    const historyItems = document.querySelectorAll('.history-item');
    const closeButtons = document.querySelectorAll('.close-histori');

    historyItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                console.log(`Opening modal: ${modalId}`); // Debug: Check which modal is being opened
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                console.log(`Closing modal: ${modalId}`); // Debug: Check which modal is being closed
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-histori')) {
            console.log('Clicked outside modal'); // Debug: Check if clicking outside modal works
            event.target.style.display = 'none';
        }
    });
});

// =========================detail berita======================

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    var windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.style.animationPlayState = 'running';
        }
    });
});