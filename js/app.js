const url = `https://openapi.programming-hero.com/api/news/categories`;
fetch(url)
    .then(res => res.json())
    .then(data => displayCatagories(data.data.news_category))
    .catch(error => console.log(error))

const fatchCatagoryNews = (catagoryId, catagoryName) => {
    toggleSpinner(true);
    const sortField = document.getElementById('sortBtnTxt').innerText;
    const url = `https://openapi.programming-hero.com/api/news/category/${catagoryId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => dsiplayNews(data, catagoryName, sortField))
        .catch(error => console.log(error))
}

const fatchNewsDetails = newsId => {
    const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => newsDetailsModal(data))
        .catch(error => console.log(error))
}
const displayCatagories = catagories => {
    const newsCatagoriList = document.getElementById('newsCatagories');
    catagories.forEach(catagory => {
        const calagoryList = document.createElement('li');
        calagoryList.innerHTML = `
        <a onclick="fatchCatagoryNews('${catagory.category_id}', '${catagory.category_name}'); makeBtnActive('${catagory.category_id}', '${catagory.category_name}')" id="${catagory.category_id}" class="catagoryBtn hover:text-indigo-600" href="#">${catagory.category_name}</a>
        `;
        newsCatagoriList.appendChild(calagoryList);
        makeBtnActive('01', 'Breaking News');
    })
}

const toggleSpinner = isLoding => {
    const loaderSection = document.getElementById('loadingSpinner');
    if (isLoding) {
        loaderSection.classList.remove('hidden');
    }
    else {
        loaderSection.classList.add('hidden');
    }
}

const makeBtnActive = (btnId, btnName) => {
    const activeBtn = document.getElementById(btnId);
    document.getElementById('trendingBtn').classList.remove('bg-indigo-600');
    document.getElementById('trendingBtn').classList.add('text-indigo-600');
    document.getElementById('todayPiBtn').classList.remove('bg-indigo-600');
    document.getElementById('todayPiBtn').classList.add('text-indigo-600');
    document.getElementById('newsContainer').classList.remove('hidden');
    document.getElementById('newsBtn').classList.add('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'dark:text-white');
    document.getElementById('blogBtn').classList.remove('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'dark:text-white');
    document.getElementById('questionAccordion').classList.add('hidden');
    document.getElementById('filterSection').classList.remove('hidden');


    let el = activeBtn.parentElement.parentElement;
    for (let i = 0; i < el.children.length; i++) {
        let child = el.children[i];
        child.classList.add('text-indigo-600');
        if (child.innerText != btnName) {
            child.classList.remove('text-indigo-600');
        }
    }
}