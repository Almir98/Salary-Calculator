document.getElementById('forma').addEventListener('submit',function(e){

    e.preventDefault();
    document.getElementById('loading').style.display='block';
    setTimeout(calculateResults,400);
});

function calculateResults(e)
{
    document.getElementById('loading').style.display='none';

    const efektivno=document.getElementById("efektivno");
    const prekovremeno=document.getElementById("prekovremeno");
    const godisnji=document.getElementById("godisnji");
    const vikend=document.getElementById("vikend");
    const praznikRad=document.getElementById("praznikRad");
    const praznici=document.getElementById("praznik");
    const koeficijent=document.getElementById("koeficijent");
    const staz=document.getElementById("staz");
    const clanovi=document.getElementById("clan");
    
    // Koeficijenti
    const koefEPG=1;
    const koefV=parseFloat(1.2);
    const koefP=parseFloat(1.3);
    const koefRP=parseFloat(1.5);


    // pohrana 

    const ukupnoEfektivno=document.getElementById("ukupnoEF");
    const ukupnoPrekovremeno=document.getElementById("ukupnoPR");
    const ukupnoGodisnji=document.getElementById("ukupnoGD");
    const ukupnoVikend=document.getElementById("ukupnoV");
    const ukupnoRadniPraznik=document.getElementById("ukupnoRP"); // RADNI PRAZNIK
    const ukupnoPraznik=document.getElementById("ukupnoP");   // praznik
    const ukupnoBruto=document.getElementById("ukupnoBruto");
    const ukupnoNeto=document.getElementById("ukupnoNeto");
    const dohodak=document.getElementById("dohodak");
    const gotovina=document.getElementById("ukupnoGotovina");
    const minuliRad=document.getElementById("minuliRad");


    // KONSTANTA
    const satnica=parseFloat(3.99);

    if(efektivno.value!==''&&prekovremeno.value!==''&&godisnji.value!==''&&vikend.value!==''
       && praznikRad.value!==''&&praznici.value!==''&&koeficijent.value!==''&&staz.value!==''&&clanovi.value!=='')
    {
        ukupnoEfektivno.value=parseFloat(efektivno.value*satnica*koeficijent.value*koefEPG).toFixed(2);
        ukupnoPrekovremeno.value=parseFloat(prekovremeno.value*satnica*koeficijent.value*koefP).toFixed(2);
        ukupnoGodisnji.value=parseFloat(godisnji.value*satnica*koeficijent.value*koefEPG).toFixed(2);
        ukupnoVikend.value=parseFloat(vikend.value*satnica*koeficijent.value*koefV).toFixed(2);
        ukupnoRadniPraznik.value=parseFloat(praznikRad.value*satnica*koeficijent.value*koefRP).toFixed(2);
        ukupnoPraznik.value=parseFloat(praznici.value*satnica*koeficijent.value*koefEPG).toFixed(2);

         var a=parseFloat(ukupnoEfektivno.value)+parseFloat(ukupnoPrekovremeno.value);
         const b=parseFloat(ukupnoGodisnji.value)+parseFloat(ukupnoVikend.value);
         const c=parseFloat(ukupnoPraznik.value)+parseFloat(ukupnoRadniPraznik.value);
         var ukupno=parseFloat(a)+parseFloat(b)+parseFloat(c);

        const minRad=parseFloat(0.006);
        const minStaz=parseFloat(staz.value*minRad).toFixed(4);
        minuliRad.value=(parseFloat(ukupno)*parseFloat(minStaz)).toFixed(2);

        const porez=parseFloat(0.69);
       
        //Bruto i neto 
        ukupnoBruto.value=(parseFloat(ukupno)+parseFloat(minuliRad.value)).toFixed(2);
        ukupnoNeto.value=(parseFloat(ukupnoBruto.value)*parseFloat(porez)).toFixed(2);

        let s=parseFloat(ukupnoNeto.value-600);

        dohodak.value=parseFloat(s*0.1).toFixed(2);
        gotovina.value=parseFloat(ukupnoNeto.value-dohodak.value).toFixed(2);

        document.getElementById('loading').style.display='none';
    }
    else{
        showError("Popunite sva polja !");
    }
}

function showError(error)
{
    const e=document.getElementById("err");
    const heading=document.querySelector ('#red');
    const errDiv=document.createElement('div');
    errDiv.className="alert alert-danger";
    errDiv.textContent=error;
    e.appendChild(errDiv);
    setTimeout(clearError,4000);
}

function clearError()
{
    document.querySelector('.alert').remove();
}

