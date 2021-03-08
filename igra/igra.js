//Var koja sluzi kao brojac

let brojac = 0;

// u tu varijablu spremamo slovo

let slovo;

//niz spremamo slova(pogodena) i crtice

let nizSretnih = [];

//definirana riječ

const rijec = "aspira";

while(brojac < rijec.length)
{
    nizSretnih[brojac] = "_";
    brojac++;
}

brojac = 0;

while(brojac < rijec.length)
{
    slovo = prompt(
        "Preostala slova: " + nizSretnih.join(" ") + "\n Unesite novo slovo"
    );

    for(let j=0;j<rijec.length;j++)
    {
        if(rijec[j] == slovo && nizSretnih[j] != slovo)
        {
            nizSretnih[j] = slovo;
            brojac++;
        }
    }
}
alert("Cestitamo!!!");