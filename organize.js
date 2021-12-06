let toOrganize = `
        40	Matthew	28	1071	23343	Matthew	Gospel	NT
        41	Mark	16	678	14949	Mark	Gospel	NT
        42	Luke	24	1151	25640	Luke	Gospel	NT
        43	John	21	879	18658	John	Gospel	NT
        44	Acts	28	1007	24229	Luke	History	NT
        45	Romans	16	433	9422	Paul	Letter	NT
        46	1Corinthians	16	437	9462	Paul	Letter	NT
        47	2Corinthians	13	257	6046	Paul	Letter	NT
        48	Galatians	6	149	3084	Paul	Letter	NT
        49	Ephesians	6	155	3022	Paul	Letter	NT
        50	Philippians	4	104	2183	Paul	Letter	NT
        51	Colossians	4	95	1979	Paul	Letter	NT
        52	1Thessalonians	5	89	1837	Paul	Letter	NT
        53	2Thessalonians	3	47	1022	Paul	Letter	NT
        54	1Timothy	6	113	2244	Paul	Letter	NT
        55	2Timothy	4	83	1666	Paul	Letter	NT
        56	Titus	3	46	896	Paul	Letter	NT
        57	Philemon	1	25	430	Paul	Letter	NT
        58	Hebrews	13	303	6897	Unknown	Letter	NT
        59	James	5	108	2304	James	Letter	NT
        60	1Peter	5	105	2476	Peter	Letter	NT
        61	2Peter	3	61	1553	Peter	Letter	NT
        62	1John	5	105	2517	John	Letter	NT
        63	2John	1	13	298	John	Letter	NT
        64	3John	1	14	294	John	Letter	NT
        65	Jude	1	25	608	Jude	Letter	NT
        66	Revelation	22	404	11952	John	Prophecy	NT
`;

const regexp = /\W+/g;

let split = toOrganize.split(regexp);
let filtered = split.filter(item => {
    return item !== " " && item !== "";
})

let organized = [];
for (let i = 0; i < filtered.length; i+=8) {
    let book = {};
    book.book = Number(filtered[i + 0]);
    book.name = filtered[i + 1];
    book.chapters = Number(filtered[i + 2]);
    book.verses = Number(filtered[i + 3]);
    book.words = Number(filtered[i + 4]);
    book.author = filtered[i + 5];
    book.genre = filtered[i + 6];
    organized.push(book);
}

document.body.innerHTML = JSON.stringify(organized);