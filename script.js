// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    
    // Iconos para desktop
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    
    // Iconos para mobile
    const sunIconMobile = document.getElementById('theme-icon-sun-mobile');
    const moonIconMobile = document.getElementById('theme-icon-moon-mobile');
    const themeTextMobile = document.getElementById('theme-text-mobile');
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        updateThemeIcons(true);
    }
    
    function updateThemeIcons(isLight) {
        if (isLight) {
            // Desktop
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            // Mobile
            sunIconMobile.classList.remove('hidden');
            moonIconMobile.classList.add('hidden');
            themeTextMobile.textContent = 'Modo Noche';
        } else {
            // Desktop
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            // Mobile
            sunIconMobile.classList.add('hidden');
            moonIconMobile.classList.remove('hidden');
            themeTextMobile.textContent = 'Modo Día';
        }
    }
    
    function toggleTheme() {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        updateThemeIcons(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);
}

// Initialize Animated Squares Background
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tema
    initThemeToggle();
    
    const squaresContainer = document.getElementById('squares-background');
    const numSquares = 50; // Number of squares to generate
    
    // Generate squares
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.className = 'animated-square';
        
        // Random size between 20px and 80px
        const size = Math.random() * 60 + 20;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        
        // Random starting position
        square.style.left = `${Math.random() * 100}%`;
        square.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        square.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        square.style.animationDelay = `${delay}s`;
        
        // Random opacity
        const opacity = Math.random() * 0.3 + 0.1;
        square.style.opacity = opacity;
        
        squaresContainer.appendChild(square);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // View More Projects functionality
    const viewMoreBtn = document.getElementById('view-more-btn');
    const moreProjects = document.querySelectorAll('.more-projects');
    let showingAll = false;

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            moreProjects.forEach(project => {
                project.classList.toggle('hidden');
            });

            showingAll = !showingAll;
            
            if(showingAll) {
                viewMoreBtn.innerHTML = 'Show Less';
                viewMoreBtn.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>';
            } else {
                viewMoreBtn.innerHTML = 'View All Projects';
                viewMoreBtn.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>';
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Popups - projects
const projectsData = {
    "World of Equilibrium": {
        year: "En desarrollo",
        media: [
            { type: "video", id: "F-FQ2edShsw" },
            { type: "image", src: "imgs/WOE.png" },
            { type: "image", src: "imgs/WOE-gameplay1.jpg" },
            { type: "image", src: "imgs/WOE-gameplay2.jpg" }
        ],
        description: "As a member of a small, collaborative team, I contribute directly to the development of the MMORPG 'World of Equilibrium'. My primary focus is on designing quests that immerse players in the storyline, creating typical MMO objectives that enhance the narrative surrounding the game's factions: The Kingdom and The Tribe. <br><br> Additionally, I design characters, developing their backstories and visual appearances while utilizing available resources to ensure each character fits seamlessly within the game's context. For level design, I create maps that are visually appealing and cohesive, paying close attention to element placement, lighting, and the harmony of assets. I avoid including anything that feels out of place unless it serves a clear narrative or environmental purpose. <br><br>We use Unreal Engine for development, and as a small team, we maintain constant communication to quickly address issues and keep the development process running smoothly, always working closely with the game director.",
        features: [
            "Narrative development and immersive environment design.",
            "Consistent character and level creation aligned with game lore.",
            "Skilled use of datatables, datasheets, and Discord for communication and data handling.",
            "Proactive collaboration through idea exchange and feedback application.",
            "Innovative problem-solving to enhance game coherence and appeal."
        ],
        technologies: ["Unreal Engine 5", "Blueprints", "Narrative Design"],
        link: "https://www.equilibrium-games.com/games/world-of-equilibrium"
    },
    "Brandcade": {
        year: "2022",
        media: [
            { type: "video", id: "ZhVGAGWwAwQ" }
        ],
        description: "During my internship as a Game Design Intern at Brandcade, I participated in the development of a Roblox experience that has reached over 10.8k visits, working under Amber Studio. My role involved creating game concepts from scratch, including core mechanics, themes, and overall gameplay flow. I collaborated closely with other designers and developers through daily stand-ups, ensuring smooth communication and problem-solving within the team. One of my favorite contributions was designing a unique bubble mechanic for a racing game: players would enter a bubble that allowed them to bounce and move differently, and to activate nitro, they had to strategically deflate it. In addition to the hands-on experience, I earned a scholarship for advanced training in Unreal Engine and 3D modeling in Blender.",
        features: [
            "Designed original game concepts including core mechanics, themes, and gameplay flow.",
            "Developed innovative gameplay mechanics, such as a strategic bubble system for a racing game.",
            "Collaborated effectively with multidisciplinary teams through daily stand-ups to ensure smooth development.",
            "Contributed to a Roblox experience that achieved over 10.8k visits.",
            "Earned a scholarship for advanced Unreal Engine and Blender training, enhancing technical expertise."
        ],
        technologies: ["Roblox Studio", "Lua"],
        link: "https://www.roblox.com/es/games/14983485047/NEW-Brandcade"
    },
    "Rooster Games": {
        year: "2021",
        media: [
            { type: "image", src: "imgs/poio_fliped.png" }
        ],
        description: "The club is dedicated to supporting anyone interested in creating video games, regardless of experience level. We foster a collaborative environment where members work together on real projects, from concept to development, promoting hands-on learning and knowledge sharing. To achieve this, we organize various activities such as talks, game jams, and team work sessions, open to both students of the Autonomous University of Aguascalientes and the general public interested in game development.",
        features: [
            "Inclusive community welcoming developers of all skill levels.",
            "Collaborative projects that drive practical game creation.",
            "Events including talks, workshops, and game jams to enhance skills.",
            "Open space for students and external participants, facilitating networking.",
            "Focus on active learning and teamwork to foster professional growth."
        ],
        technologies: ["Unity", "Unreal Engine", "Godot"],
        link: "https://roostergamesclub.github.io/Site/index.html"
    }
};

// Función para abrir el modal
function openProjectModal(projectName) {
    const project = projectsData[projectName];
    if (!project) return;

    // Configurar el modal con los datos del proyecto
    const modalTitle = document.getElementById('modal-title');
    const modalMainMedia = document.getElementById('modal-main-media');
    const modalGallery = document.getElementById('modal-gallery');
    const modalDescription = document.getElementById('modal-description');
    const featuresList = document.querySelector('#modal-features ul');
    const techContainer = document.getElementById('modal-technologies');
    const visitBtn = document.getElementById('modal-visit-btn');

    modalTitle.textContent = `${projectName} (${project.year})`;
    
    // Función para renderizar el medio principal
    function renderMainMedia(mediaItem, index) {
        modalMainMedia.innerHTML = '';
        if (mediaItem.type === 'video') {
            modalMainMedia.innerHTML = `
                <div class="aspect-w-16 aspect-h-9" style="height: 450px;">
                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/${mediaItem.id}?autoplay=0" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
            `;
        } else {
            modalMainMedia.innerHTML = `
                <div class="rounded-lg overflow-hidden" style="height: 450px;">
                    <img src="${mediaItem.src}" alt="${projectName}" class="w-full h-full object-contain bg-black">
                </div>
            `;
        }
    }
    
    // Renderizar el primer medio como principal
    if (project.media && project.media.length > 0) {
        renderMainMedia(project.media[0], 0);
    }
    
    // Limpiar y llenar la galería de miniaturas
    modalGallery.innerHTML = '';
    if (project.media && project.media.length > 1) {
        project.media.forEach((mediaItem, index) => {
            let thumbnailHTML = '';
            
            if (mediaItem.type === 'video') {
                // Miniatura de video de YouTube
                const thumbnailUrl = `https://img.youtube.com/vi/${mediaItem.id}/mqdefault.jpg`;
                thumbnailHTML = `
                    <div class="thumbnail-item rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all relative" data-index="${index}">
                        <img src="${thumbnailUrl}" alt="Video thumbnail" class="w-full h-20 object-cover">
                        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                `;
            } else {
                // Miniatura de imagen
                thumbnailHTML = `
                    <div class="thumbnail-item rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all" data-index="${index}">
                        <img src="${mediaItem.src}" alt="${projectName} thumbnail" class="w-full h-20 object-cover">
                    </div>
                `;
            }
            
            modalGallery.innerHTML += thumbnailHTML;
        });
        
        // Agregar event listeners a las miniaturas
        document.querySelectorAll('.thumbnail-item').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                renderMainMedia(project.media[index], index);
                
                // Actualizar borde activo
                document.querySelectorAll('.thumbnail-item').forEach(t => {
                    t.classList.remove('border-indigo-500');
                    t.classList.add('border-transparent');
                });
                this.classList.remove('border-transparent');
                this.classList.add('border-indigo-500');
            });
        });
        
        // Marcar la primera miniatura como activa
        const firstThumbnail = document.querySelector('.thumbnail-item[data-index="0"]');
        if (firstThumbnail) {
            firstThumbnail.classList.remove('border-transparent');
            firstThumbnail.classList.add('border-indigo-500');
        }
    }

    // Configurar descripción
    modalDescription.innerHTML = `<p>${project.description}</p>`;
    
    // Configurar características
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        featuresList.innerHTML += `
            <li class="flex items-start">
                <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>${feature}</span>
            </li>
        `;
    });

    // Configurar tecnologías
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        techContainer.innerHTML += `<span class="px-3 py-1 bg-indigo-900/50 rounded-full text-sm">${tech}</span>`;
    });

    // Configurar botón de visita
    visitBtn.onclick = () => {
        if (project.link && project.link !== '#') {
            window.open(project.link, '_blank');
        }
    };

    // Mostrar el modal
    document.getElementById('project-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.getElementById('modal-main-media').innerHTML = '';
    document.body.style.overflow = 'auto';
}

// Event listeners para los proyectos
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectName = this.querySelector('h3').textContent;
        openProjectModal(projectName);
    });
});

// Event listeners para cerrar el modal
document.getElementById('close-modal').addEventListener('click', closeProjectModal);
document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Formspree Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submit-text');
    const spinner = document.getElementById('submit-spinner');
    const formMessages = document.getElementById('form-messages');
    
    // Mostrar spinner
    submitText.textContent = 'Sending...';
    spinner.classList.remove('hidden');
    submitBtn.disabled = true;
    
    // Enviar datos
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success message
            formMessages.innerHTML = `
                <div class="bg-green-900/50 text-green-300 p-4 rounded-lg">
                    <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon.
                </div>
            `;
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        // Error message
        formMessages.innerHTML = `
            <div class="bg-red-900/50 text-red-300 p-4 rounded-lg">
                <strong>Oops!</strong> There was a problem sending your message. Please try again later or contact me via email.
            </div>
        `;
    })
    .finally(() => {
        // Reset button
        submitText.textContent = 'Send Message';
        spinner.classList.add('hidden');
        submitBtn.disabled = false;
        formMessages.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessages.classList.add('hidden');
        }, 5000);
    });
});