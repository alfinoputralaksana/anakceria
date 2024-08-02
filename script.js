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


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
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

function openModal(childName) {
    document.getElementById('childName').textContent = childName;
    document.getElementById('adoptModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('adoptModal').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const childName = document.getElementById('childName').textContent;
    const parentName = document.getElementById('parentName').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    // Di sini kamu bisa menambahkan logika untuk mengirim data form ke server

    alert("Terima kasih, " + parentName + ", telah mengajukan permohonan adopsi untuk " + childName + "!");
    closeModal();
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
