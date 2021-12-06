let bible = [];
let toRead = [];

async function getBible() {

    // load bible info
    await fetch("./bible.json").then(response => {
        return response.json();
    }).then(data => {
        bible = data;
        return;
    }).catch(err => {
        alert(err);
    });
}
getBible();

const form = document.querySelector("form");
let from, to, mpd, wpm;
let fromIndex, toIndex;
let numberOfDays, numberOfMinutes;
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    from = Number(e.target[0].value);
    to = Number(e.target[1].value);
    mpd = Number(e.target[2].value);
    wpm = Number(e.target[3].value);

    toRead = bible.slice(from, to+1);
    let totalChapters = 0;
    let totalVerses = 0;
    let totalWords = 0;

    toRead.forEach(book => {
        totalChapters += book.chapters;
        totalVerses += book.verses;
        totalWords += book.words;
    });

    numberOfMinutes = totalWords / wpm;
    numberOfDays = numberOfMinutes / mpd;

    result.innerHTML = `
        <table class="table">
            <tbody>
                <tr>
                <th scope="row">Number of Chapters</th>
                <td>${totalChapters}</td>
                </tr>
                <tr>
                <th scope="row">Number of Verses</th>
                <td>${totalVerses}</td>
                </tr>
                <tr>
                <th scope="row">Number of words</th>
                <td>${totalWords}</td>
                </tr>
                <th scope="row">Number of days</th>
                <td>${Math.ceil(numberOfDays)}</td>
                </tr>
            </tbody>
        </table>
    `;
});