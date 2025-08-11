// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3b82f6"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#3b82f6",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

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
        videoId: "F-FQ2edShsw",
        images: [
            "imgs/WOE.png",
            "imgs/WOE-gameplay1.jpg",
            "imgs/WOE-gameplay2.jpg"
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
        videoId: "ZhVGAGWwAwQ",
        images: [
            
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
        images: [
            "imgs/poio_fliped.png"
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
    const modalVideo = document.getElementById('modal-video');
    const modalGallery = document.getElementById('modal-gallery');
    const modalDescription = document.getElementById('modal-description');
    const featuresList = document.querySelector('#modal-features ul');
    const techContainer = document.getElementById('modal-technologies');
    const visitBtn = document.getElementById('modal-visit-btn');

    modalTitle.textContent = `${projectName} (${project.year})`;
    
    // Configurar video si existe
    if (project.videoId) {
        modalVideo.src = `https://www.youtube.com/embed/${project.videoId}?autoplay=0`;
        modalVideo.classList.remove('hidden');
    } else {
        modalVideo.classList.add('hidden');
    }
    
    // Limpiar y llenar la galería de imágenes
    modalGallery.innerHTML = '';
    project.images.forEach(imgSrc => {
        modalGallery.innerHTML += `
            <div class="rounded-lg overflow-hidden">
                <img src="${imgSrc}" alt="${projectName} screenshot" class="w-full h-40 object-cover hover:scale-105 transition-transform cursor-pointer">
            </div>
        `;
    });

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
    document.getElementById('modal-video').src = '';
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