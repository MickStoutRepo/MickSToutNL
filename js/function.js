function showContent(section) {
    const content = {
        home: `
            <h1>Welkom op mijn website!</h1>
            <p>Dit is de homepagina.</p>
        `,
        about: `
            <h1>Over Mij</h1>
            <p>Hier is wat informatie over mij.</p>
            <p>Ik ben Mick Stout, een webontwikkelaar met een passie voor technologie en innovatie.</p>
        `,
        contact: `
            <h1>Contact</h1>
            <p>Neem contact met mij op via dit formulier.</p>
            <form>
                <label for="name">Naam:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="message">Bericht:</label><br>
                <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
                <input type="submit" value="Verstuur">
            </form>
        `
    };

    document.getElementById('content').innerHTML = content[section];
}

// Standaard inhoud bij het laden van de pagina
document.addEventListener('DOMContentLoaded', () => {
    showContent('home');
});