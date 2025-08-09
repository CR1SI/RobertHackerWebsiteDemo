let hambEnabled = false;

function setHeader(elementId, pageTitle){
    const el = document.getElementById(elementId);
    if(el){
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop();

        // Helper to add highlight if active
        const activeClass = "outline outline-red-300";

        el.innerHTML = `
            <nav>
                <ul class="grid gap-4 sm:grid-cols-12">
                    <li class="sm:col-span-6">
                        <div class="flex items-center justify-center">
                            <a>
                                <h1 class="text-4xl font-kanit font-medium text-black text-shadow-md hover:text-gray-600 transition-colors duration-300 ease-in-out sm:text-6xl">${pageTitle}</h1>
                            </a>
                        </div>
                    </li>
                    <li class="sm:col-span-6">
                        <div class="relative grid items-center justify-items-center">
                            <!-- Hamburger button (visible on mobile) -->
                            <button id="hamburger-${elementId}" class="sm:hidden text-4xl p-1 text-black hover:scale-120 transition-transform duration-100 ease-in-out active:scale-95" aria-label="Toggle navigation">
                                ≡
                            </button>

                            <!-- Navigation links -->
                            <div id="nav-links-${elementId}" class="hidden sm:grid items-center justify-items-center m-4 gap-4 sm:grid-cols-4">
                                <button onclick="window.location.href='index.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 text-black font-kanit font-normal ${currentPage === 'index.html' ? activeClass : ''}">Home</button>

                                <button onclick="window.location.href='books.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 text-black font-kanit font-normal ${currentPage === 'books.html' ? activeClass : ''}">Books</button>

                                <button onclick="window.location.href='about.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 text-black font-kanit font-normal ${currentPage === 'about.html' ? activeClass : ''}">About</button>

                                <button onclick="window.location.href='contact.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 text-black font-kanit font-normal ${currentPage === 'contact.html' ? activeClass : ''}">Contact</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>`;
        // Hamburger toggle logic
        const hamburger = document.getElementById(`hamburger-${elementId}`);
        const navLinks = document.getElementById(`nav-links-${elementId}`);
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hambEnabled = !hambEnabled;
                navLinks.classList.toggle('hidden');
                navLinks.classList.toggle('grid');
            });
        }
    }
}


setHeader('headerH', 'Robert Hacker');
setHeader('headerB', 'Robert Hacker');
setHeader('headerC', 'Robert Hacker');
setHeader('headerA', 'Robert Hacker');

// Find the visible header
const header =
    document.getElementById('headerH') ||
    document.getElementById('headerB') ||
    document.getElementById('headerC') ||
    document.getElementById('headerA');

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (!header || hambEnabled) return;
    if (window.scrollY > lastScrollY) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.5s ease';
    } else if (window.scrollY < lastScrollY) {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.5s ease';
    }
    lastScrollY = window.scrollY;
});