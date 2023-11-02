let years = ['PRABHAVA', 'VIBHAVA', 'SHUKLA', 'PRAMODUTA',
    'PRAJOTHPATTHI', 'ANGEERASA', 'SRIMUKHA', 'BHAVA',
    'YUVA', 'DHATA', 'EESHWARA', 'BAHUDAANYA', 'PRAMAADI', 'VIKRAMA',
    'VRUSHA', 'CHITRABANU', 'SWABANU', 'TAARANA', 'PAARTHIVA', 'VYAYA',
    'SARVAJITTU', 'SARVADHARI', 'VIRODI', 'VIKRUTI', 'KHARA', 'NANDANA',
    'VIJAYA', 'JAYA', 'MANMADHA', 'DURMUKHI', 'HEVILAMBHI', 'VILAMBHI',
    'VIKAARI', 'SHARWARI', 'PLAVA', 'SHUBHAKRUTH', 'SHOBHAKRUTH', 'KRODHI',
    'VISHWAVASU', 'PARAABHAVA', 'PLAVANGA', 'KEELAKA', 'SOWMYA', 'SAADAARANA',
    'VIRODHIKRUTH', 'PAREEDHAVI', 'PRAMAADHEECHA', 'AANADA', 'RAAKSHASA', 'NALA',
    'PINGALA', 'KAALAYUKTI', 'SIDDHARTI', 'ROUDRI', 'DIRMITHI', 'DUNDUBHI', 'RUDHIRODHGAARI',
    'RAKTHAAKSHI', 'KRODHANA', 'AKSHAYA'];

function findYear(n) {
    let v = document.getElementById("input").value;
    v = Number(v);

    if (!(v == NaN)) {
        document.getElementById("name").innerHTML = '';
        document.getElementById("cheer").innerHTML = 'Enter Valid Year';
        if (v <= 6 || v > 99999) {
            document.getElementById("name").innerHTML = '';
            document.getElementById("cheer").innerHTML = 'Enter 6 years above / Year is too large';
        }
    }

    if (v >= 7 && v < 99999) {
        n = v;
        let year = 0;
        for (let i = 0; i < years.length; i++) {
            year = (n - 7) % 60;
        }
        document.getElementById("name").innerHTML = 'Telugu Year is ' + years[year];
        let d = new Date();
        if (v == d.getFullYear()) {
            document.getElementById("cheer").innerHTML = years[year] + ' Nama Samvathsara Shubhakankshalu.'
        } else {
            document.getElementById("cheer").innerHTML = '';
        }
    }

};


