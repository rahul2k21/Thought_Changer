function generate()
{
    var quotes={
    "― Lana Del Rey": '"Who are Are you in touch with all of your darkest fantasies  Have you created a life for yourself where you can experience them. "',

    "-Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',

    "― Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it"',

     "― Candace Bushnell": '“Maybe some women aren t meant to be tamed. Maybe they just need to rufree until they find someone just as wild to run with them  Carrie Bradshaw”',
     

    "― C.S. Lewis":' “I was not born to be free---I was born to adore and obey.”',

    "― Lauren DeStefano, Fever":'“But there’s no such thing as free. There are only different and more horrible ways to be enslaved.”',
}
var authors = Object.keys(quotes);
var author=authors[Math.floor(Math.random() *
authors.length)];

var quote =quotes[author];
document.getElementById("quote").innerHTML=quote;
document.getElementById("author").innerHTML=author;

}