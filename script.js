// لیستی سوورەتەکانی قورئان (١١٤ سوورەت)
const quranSuras = [
    // مەشاری ڕاشد
    {id: 1, name: "الفاتحة", audio: "https://server.mp3quran.net/mishary_rashid/001.mp3"},
    
    // عەبدوڵڵا بەسفەر
    {id: 1, name: "الفاتحة", audio: "https://server.mp3quran.net/basfar/001.mp3"},
    
    // سعد الغامدی
    {id: 1, name: "الفاتحة", audio: "https://server.mp3quran.net/s_gmd/001.mp3"}
];

// DOM
const suraList = document.getElementById("suraList");
const audio = document.getElementById("audio");
const currentSura = document.getElementById("currentSura");
const searchInput = document.getElementById("search");

// نیشاندانی هەموو سوورەتەکان
function displaySuras(surasToShow = suras) {
    suraList.innerHTML = "";
    surasToShow.forEach(sura => {
        const suraItem = document.createElement("div");
        suraItem.className = "sura-item";
        suraItem.innerHTML = `
            <h3>${sura.name}</h3>
            <p>ژمارە: ${sura.id}</p>
        `;
        suraItem.addEventListener("click", () => playSura(sura));
        suraList.appendChild(suraItem);
    });
}

// پەخشکردنی سوورەت
function playSura(sura) {
    audio.src = sura.audio;
    currentSura.textContent = `ئێستا پەخش دەکرێت: ${sura.name}`;
    audio.play();
}

// گەڕان لە ناو سوورەتەکان
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredSuras = suras.filter(sura => 
        sura.name.toLowerCase().includes(searchTerm)
    );
    displaySuras(filteredSuras);
});

// دەستپێکردن
displaySuras();