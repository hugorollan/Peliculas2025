// MODELO DE DATOS

    let mis_peliculas_iniciales = [
       {titulo: "Superlópez",   director: "Javier Ruiz Caldera", "miniatura": "files/superlopez.png"},
       {titulo: "Jurassic Park", director: "Steven Spielberg", "miniatura": "files/jurassicpark.png"},
       {titulo: "Interstellar",  director: "Christopher Nolan", "miniatura": "files/interstellar.png"}
    ];

    let mis_peliculas = [];

    // Guardar y leer películas usando solo localStorage
    const postAPI = async (peliculas) => {
        localStorage.setItem('mis_peliculas', JSON.stringify(peliculas));
        return true;
    }
    const getAPI = async () => {
        const pelis = localStorage.getItem('mis_peliculas');
        if (!pelis) return [];
        try {
            return JSON.parse(pelis);
        } catch {
            return [];
        }
    }
    const updateAPI = async (peliculas) => {
        localStorage.setItem('mis_peliculas', JSON.stringify(peliculas));
        return true;
    }

    // VISTAS

    const indexView = (peliculas) => {
                let i=0;
                let view = "";

                if (peliculas.length === 0) {
                        view += `<div style='color:#888; margin:20px 0;'>No hay películas</div>`;
                }

                while(i < peliculas.length) {
                    view += `
                <div class="movie">
                     <div class="movie-img">
                        <img src="${peliculas[i].miniatura}" onerror="this.src='files/placeholder.png'"/>
                     </div>
                     <div class="title">
                             ${peliculas[i].titulo || "<em>Sin título</em>"}
                     </div>
                     <div class="actions">
                             <button class="show" data-my-id="${i}">ver</button>
                             <button class="edit" data-my-id="${i}">editar</button>
                             <button class="delete" data-my-id="${i}">borrar</button>
                        </div>
                </div>\n`;
                    i = i + 1;
                }

            // Eliminado el bloque de acciones inferior para evitar menú duplicado

                return view;
    }

    const editView = (i, pelicula) => {
        return `
        <div class="modal-bg">
          <div class="modal">
            <h2>Editar Película</h2>
            <div class="field" style="width:100%; margin-bottom:10px;">
                Título <br>
                <input type="text" id="titulo" placeholder="Título" value="${pelicula.titulo}" style="width:100%;">
            </div>
            <div class="field" style="width:100%; margin-bottom:10px;">
                Director <br>
                <input type="text" id="director" placeholder="Director" value="${pelicula.director}" style="width:100%;">
            </div>
            <div class="field" style="width:100%; margin-bottom:10px;">
                Miniatura <br>
                <input type="text" id="miniatura" placeholder="URL de la miniatura" value="${pelicula.miniatura}" style="width:100%;">
            </div>
            <div class="actions" style="width:100%; display:flex; justify-content:center; gap:10px;">
                <button class="update" data-my-id="${i}">Actualizar</button>
                <button class="index">Volver</button>
            </div>
          </div>
        </div>`;
    }

    const showView = (pelicula) => {
                        return `
                        <div class="modal-bg">
                            <div class="modal">
                                <h2 style="margin-bottom:15px;">${pelicula.titulo || "<em>Sin título</em>"}</h2>
                                <img src="${pelicula.miniatura}" onerror="this.src='files/placeholder.png'" />
                                <p><strong>Director:</strong> ${pelicula.director || "<em>Sin director</em>"}</p>
                                <div class="actions">
                                    <button class="index">Volver</button>
                                </div>
                            </div>
                        </div>`;
    }

    const newView = () => {
        return `
        <div class="modal-bg">
          <div class="modal">
            <h2>Crear Película</h2>
            <div class="field">
                Título <br>
                <input type="text" id="titulo" placeholder="Título">
            </div>
            <div class="field">
                Director <br>
                <input type="text" id="director" placeholder="Director">
            </div>
            <div class="field">
                Miniatura <br>
                <input type="text" id="miniatura" placeholder="URL de la miniatura">
            </div>
            <div class="actions">
                <button class="create">Crear</button>
                <button class="index">Volver</button>
            </div>
          </div>
        </div>`;
    }

    // Vista de búsqueda de películas en TMDb
    const searchView = () => {
        return `
        <div class="modal-bg">
          <div class="modal">
            <h2>Buscar Película en TMDb</h2>
            <div class="field">
                Título o palabra clave <br>
                <input type="text" id="search-query" placeholder="Buscar película..." style="width:100%;">
            </div>
            <div class="actions" style="margin-top:10px;">
                <button class="search">Buscar</button>
                <button class="index">Volver</button>
            </div>
            <div id="search-error" style="color:red; margin-top:10px;"></div>
          </div>
        </div>`;
    }

    // Vista de resultados de búsqueda TMDb
    const resultsView = (resultados) => {
        let view = `<div class='modal-bg'><div class='modal'><h2>Resultados de búsqueda</h2>`;
        if (!resultados || resultados.length === 0) {
            view += `<div style='color:#888; margin:20px 0;'>No se encontraron resultados.</div>`;
        } else {
            view += `<div class='results-grid'>`;
            resultados.forEach((peli, idx) => {
                view += `
                <div class="movie">
                    <div class="movie-img">
                        <img src="${peli.poster_path ? 'https://image.tmdb.org/t/p/w200' + peli.poster_path : 'files/placeholder.png'}" />
                    </div>
                    <div class="title">${peli.title || '<em>Sin título</em>'}</div>
                    <div class="desc">${peli.release_date ? 'Estreno: ' + peli.release_date : ''}</div>
                    <div class="desc">${peli.overview ? peli.overview : ''}</div>
                    <div class="actions">
                        <button class="add-from-api" data-my-id="${idx}">Añadir</button>
                    </div>
                </div>`;
            });
            view += `</div>`;
        }
        view += `<div class="actions" style="margin-top:15px;"><button class="search">Nueva búsqueda</button><button class="index">Volver</button></div></div></div>`;
        return view;
    }

    // CONTROLADORES 

    const initContr = async () => {
        // Si no hay películas en localStorage, inicializa con las iniciales
        if (!localStorage.getItem('mis_peliculas')) {
            await postAPI(mis_peliculas_iniciales);
        }
        indexContr();
    }

    // Controlador para mostrar la vista de búsqueda
    const searchViewContr = () => {
        document.getElementById('main').innerHTML = searchView();
        // Permitir buscar con Enter
        setTimeout(() => {
            const input = document.getElementById('search-query');
            if (input) {
                input.addEventListener('keydown', ev => {
                    if (ev.key === 'Enter') {
                        searchContr(input.value);
                    }
                });
            }
        }, 100);
    }

    // Controlador para buscar películas en TMDb
    let resultadosAPI = [];
    const searchContr = async (query) => {
        const errorDiv = document.getElementById('search-error');
        if (!query || query.trim().length < 2) {
            if (errorDiv) errorDiv.textContent = 'Introduce al menos 2 caracteres.';
            return;
        }
        if (errorDiv) errorDiv.textContent = '';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTgxNWVjZTI4ZjcyNWJlZGRmY2Y3OGE0YzRjZGU0ZiIsIm5iZiI6MTc2MDQ1NjUxNS4xNDcsInN1YiI6IjY4ZWU2ZjQzNDYzMzQ0Yjg0MTlkZjQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejdXz4pm0dZn0OAVJvJ16R8SwNAa-MBkO_yttUiblLk'
            }
        };
        try {
            const resp = await fetch('https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(query), options);
            const data = await resp.json();
            resultadosAPI = Array.isArray(data.results) ? data.results : [];
            document.getElementById('main').innerHTML = resultsView(resultadosAPI);
        } catch (err) {
            if (errorDiv) errorDiv.textContent = 'Error al conectar con TMDb.';
        }
    }

    // Controlador para añadir película desde API a la base local
    const addFromAPIContr = async (idx) => {
        const peli = resultadosAPI[idx];
        if (!peli) return;
        // Evitar duplicados por título y año
        const existe = mis_peliculas.some(mp => mp.titulo === peli.title && mp.director === (peli.director || ''));
        if (existe) {
            alert('La película ya existe en la base de datos local.');
            return;
        }
        // Estructura compatible con la base local
        const nuevaPeli = {
            titulo: peli.title,
            director: '', // TMDb no da director en búsqueda, se puede ampliar con otra consulta
            miniatura: peli.poster_path ? 'https://image.tmdb.org/t/p/w200' + peli.poster_path : 'files/placeholder.png'
        };
        mis_peliculas.push(nuevaPeli);
        await updateAPI(mis_peliculas);
        alert('Película añadida correctamente.');
        indexContr();
    }

    const indexContr = async () => {
    let pelis = await getAPI();
    // Si la respuesta no es un array, fuerza array vacío
    if (!Array.isArray(pelis)) pelis = [];
    // Si la respuesta es un objeto vacío, también fuerza array vacío
    if (typeof pelis === 'object' && pelis !== null && Object.keys(pelis).length === 0) pelis = [];
    mis_peliculas = pelis;
    document.getElementById('main').innerHTML = indexView(mis_peliculas);
    }

    const showContr = (i) => {
        document.getElementById('main').innerHTML = showView(mis_peliculas[i]);
    }

    const newContr = () => {
        document.getElementById('main').innerHTML = newView();
    }

    const createContr = async () => {
        const titulo = document.getElementById('titulo').value;
        const director = document.getElementById('director').value;
        const miniatura = document.getElementById('miniatura').value;
        mis_peliculas.push({titulo, director, miniatura});
        await updateAPI(mis_peliculas);
        indexContr();
    }

    const editContr = (i) => {
        document.getElementById('main').innerHTML = editView(i,  mis_peliculas[i]);
    }

    const updateContr = async (i) => {
        mis_peliculas[i].titulo   = document.getElementById('titulo').value;
        mis_peliculas[i].director = document.getElementById('director').value;
        mis_peliculas[i].miniatura = document.getElementById('miniatura').value;
        await updateAPI(mis_peliculas);
        indexContr();
    }

    const deleteContr = async (i) => {
        if (confirm("¿Seguro que quieres borrar esta película?")) {
        mis_peliculas.splice(i, 1);
        await updateAPI(mis_peliculas);
        indexContr();
        }
    }

    const resetContr = async () => {
        if (confirm("¿Seguro que quieres eliminar todas las películas?")) {
            await updateAPI([]);
            indexContr();
        }
    }

    // ROUTER de eventos
    const matchEvent = (ev, sel) => ev.target.matches(sel)
    const myId = (ev) => Number(ev.target.dataset.myId)

    document.addEventListener('click', ev => {
        if      (matchEvent(ev, '.index'))  indexContr  ();
        else if (matchEvent(ev, '.edit'))   editContr   (myId(ev));
        else if (matchEvent(ev, '.update')) updateContr (myId(ev));
        else if (matchEvent(ev, '.show'))   showContr   (myId(ev));
        else if (matchEvent(ev, '.new'))    newContr    ();
        else if (matchEvent(ev, '.create')) createContr ();
        else if (matchEvent(ev, '.delete')) deleteContr (myId(ev));
        else if (matchEvent(ev, '.reset'))  resetContr  ();
            else if (matchEvent(ev, '.search')) {
                const input = document.getElementById('search-query');
                if (input) searchContr(input.value);
                else searchViewContr(); // Si no hay input, es botón de nueva búsqueda
            }
            else if (matchEvent(ev, '.add-from-api')) addFromAPIContr(myId(ev));
    })
    
    
    // Inicialización        
    document.addEventListener('DOMContentLoaded', initContr);
    // Botón para acceder a la búsqueda desde la interfaz principal
    setTimeout(() => {
        const mainDiv = document.getElementById('main');
        if (mainDiv) {
            const btn = document.createElement('button');
            btn.textContent = 'Buscar en TMDb';
            btn.className = 'search';
            btn.style = 'margin:15px 0;';
            btn.onclick = () => searchViewContr();
            mainDiv.parentNode.insertBefore(btn, mainDiv);
        }
    }, 500);
// Inicialización        
document.addEventListener('DOMContentLoaded', initContr);