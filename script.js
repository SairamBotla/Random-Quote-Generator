function generate(){
    var quotes = {
        "― Madeline Miller" : '“Bury us, and mark our names above. Let us be free.”',
        "― Aaron Lauritsen" : '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
        "― Alysha Speer" : '“You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity "',
        "― Monique Duval" : '“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”',
        "― Mary Astell" : '“If all men are born free, how is it that all women are born slaves?',
        " Aaron Lauritsen" : '“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”',
        "― C.S. Lewis" : '“I was not born to be free---I was born to adore and obey.”',
        "― John Galsworthy" : '“Life calls the tune, we dance.”',
        "― Nenia Campbell" : '“You want to be free. You also want to be mine. You cant be both.”',
        "― Lauren DeStefano" : '“But there’s no such thing as free. There are only different and more horrible ways to be enslaved.”',
       
    }

    var authors = Object.keys(quotes);
    console.log(authors)
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote= quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author
}