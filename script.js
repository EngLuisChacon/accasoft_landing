document.addEventListener("DOMContentLoaded", function () {
  
    particlesJS("particles-js", {
        particles: {
            number: { value: 90, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1 },
        },
        retina_detect: true,
    });

    // Inicialización Servicios y Albaranes
    initSnowParticles();
    initAlbaranesParticles();

    // 2. Lógica del Toggle
    const toggle = document.getElementById("theme-toggle");
        const circle = document.getElementById("toggle-circle");
        const icon = document.getElementById("toggle-icon"); // Asegúrate de tener este elemento en tu HTML
    
        const applyTheme = (isLight) => {
            // Aplicar clase al body
            document.body.classList.toggle("light-mode", isLight);
            
            // Mover círculo
            if (circle) circle.style.transform = isLight ? "translateX(24px)" : "translateX(0px)";
            
            // Cambiar icono si existe
            if (icon) icon.textContent = isLight ? "🌙" : "☀️";
    
            // Actualizar partículas
            const colorHero = isLight ? "#000000" : "#ffffff";
            const colorServ = isLight ? "#444444" : "#cccccc";
            const colorAlb = isLight ? "#000000" : "#9ccb48";
    
            updateParticlesColor("particles-js", colorHero, true);
            updateParticlesColor("particles-services", colorServ, false);
            updateParticlesColor("particles-albaranes", colorAlb, false);
        };
    
        // Cargar preferencia guardada
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            applyTheme(true);
        } else {
            applyTheme(false);
        }
    
        // Evento Click
        if (toggle) {
            toggle.addEventListener("click", () => {
                const isLight = !document.body.classList.contains("light-mode");
                applyTheme(isLight);
                localStorage.setItem("theme", isLight ? "light" : "dark");
            });
        }
    });

function updateParticlesColor(elementId, color, updateLines) {
    if (!window.pJSDom) return;
    const instance = window.pJSDom.find(p => p.pJS.canvas.el.id === elementId);
    
    if (instance) {
        const pJS = instance.pJS;
        pJS.particles.color.value = color;
        pJS.particles.opacity.value = 0.8; 
        
        if (updateLines) {
            pJS.particles.line_linked.color = color;
            pJS.particles.line_linked.opacity = 0.4;
        }
        pJS.fn.particlesRefresh();
    }
}

function initSnowParticles() {
    particlesJS("particles-services", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#cccccc" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: false },
            line_linked: { enable: false },
            move: { enable: true, speed: 0.5, direction: "none", random: true, out_mode: "out" },
        },
        interactivity: { enable: false },
        retina_detect: true,
    });
}

function initAlbaranesParticles() {
    particlesJS("particles-albaranes", {
        particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#9ccb48" },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 5, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 0.8, direction: "top", out_mode: "out" },
        },
        interactivity: { enable: false },
        retina_detect: true,
    });
}
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cerrar menú al hacer click en un enlace
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
