function setHeader(elementId, pageTitle){
    const el = document.getElementById(elementId);
    if(el){
        el.innerHTML = `
            <div class="flex items-center justify-center sm:col-span-6">
                <a href="index.html">
                    <h1 class="text-6xl font-kanit font-medium text-gray-700 text-shadow-md hover:text-gray-900">${pageTitle}</h1>
                </a>
            </div>
            <div class="grid items-center justify-items-center m-4 gap-4 sm:grid-cols-3 sm:col-span-6  ">
                <button onclick="window.location.href='books.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 bg-gray-700 text-white font-kanit font-normal">BOOKS</button>
                
                <button onclick="window.location.href='about.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 bg-gray-700 text-white font-kanit font-normal">ABOUT ME</button>

                <button onclick="window.location.href='contact.html'" class="cursor-pointer h-[40px] w-[150px] rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 bg-gray-700 text-white font-kanit font-normal">CONTACT</button>
            </div>`;
    }
}

setHeader('headerH', 'LANDING PAGE');
setHeader('headerB', 'BOOK PAGE');
setHeader('headerC', 'CONTACT PAGE');
setHeader('headerA', 'ABOUT PAGE');