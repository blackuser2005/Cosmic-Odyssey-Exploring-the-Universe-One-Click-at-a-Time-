// Redirect to planet page
document.getElementById('planet-select').addEventListener('change', function () {
    const planetName = this.value;
    if (planetName) {
        window.location.href = `${planetName}.html`;
    }
});

// Redirect to dwarf planet page
document.getElementById('dwarf-planet-select').addEventListener('change', function () {
    const dwarfPlanetName = this.value;
    if (dwarfPlanetName) {
        window.location.href = `${dwarfPlanetName}.html`;
    }
});

// Redirect to moon page
document.getElementById('moon-select').addEventListener('change', function () {
    const moonName = this.value;
    if (moonName) {
        window.location.href = `${moonName}.html`;
    }
});
