const myHeader = document.getElementById('header');
myHeader.innerHTML = `
    <div class="flex items-center justify-center sm:col-span-6">
        <h6 class="text-6xl font-extrabold text-gray-700">WEBSITE NAME</h6>
    </div>
    <div class="grid items-center justify-items-center m-4 gap-4 sm:grid-cols-3 sm:col-span-6  ">
        <button class="h-[40px] w-[150px] rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 bg-gray-700 text-white">BOOKS</button>
        <button class="h-[40px] w-[150px] rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 bg-gray-700 text-white">ABOUT</button>
        <button class="h-[40px] w-[150px] rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out active:scale-95 bg-gray-700 text-white">CONTACT</button>
    </div>`;