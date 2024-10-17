// Gestione Login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Per test: credenziali temporanee
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        localStorage.setItem('isLoggedIn', 'true');
    } else {
        alert('Credenziali non valide');
    }
}

// Gestione Logout
function handleLogout() {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    localStorage.removeItem('isLoggedIn');
}

// Controllo stato login al caricamento
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
    }
}

// Funzioni per le sezioni
function showProducts() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Gestione Prodotti</h2>
        <div class="mb-4">
            <button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Nuovo Prodotto
            </button>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoria</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantità</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Azioni</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <!-- I prodotti verranno caricati qui -->
                </tbody>
            </table>
        </div>
    `;
}

function showInventory() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Gestione Magazzino</h2>
        <p>Sezione in sviluppo...</p>
    `;
}

function showOrders() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Gestione Ordini</h2>
        <p>Sezione in sviluppo...</p>
    `;
}