


if( document.getElementById('mainLista')){
    var card =` <div class="main__list" >`
    for(let i=0; i<data1.length;i++){
             card += `
            <article class="main__list_item">
                <div class="card__title__img">
                    <h2>${data1[i].titulo}</h2>
                </div>
                <figure tabindex="-1" class="card__img">
                    <img src="${data1[i].image}" alt="foto de departamento">
                    <div class="card__info">
                        <div class="card__info__item">
                            <p>1100 Bear </p>
                            <p>${data1[i].direccion}</p>
                            <ol>
                                <li><i class="fas fa-bed"></i> ${data1[i].camas}</li>
                                <li><i class="fas fa-bath"></i> ${data1[i].banos}</li>
                                <li><i class="fas fa-car"></i> ${data1[i].cochera}</li>
                            </ol>
                        </div>
                    </div>

                </figure>
            </article>
            `
            //console.log(card)

            document.getElementById('mainLista').innerHTML = card;
    }
    card+=`</div>`
}if( document.getElementById('mainLista2')){
    var card =` <div class="main__list" >`
    for(let i=0; i<data2.length;i++){
             card += `
            <article class="main__list_item">
                <div class="card__title__img">
                    <h2>${data2[i].titulo}</h2>
                </div>
                <figure tabindex="-1" class="card__img">
                    <img src="${data2[i].image}" alt="foto de departamento">
                    <div class="card__info">
                        <div class="card__info__item">
                            <p>1100 Bear </p>
                            <p>${data2[i].direccion}</p>
                            <ol>
                             <!--<li><i class="fas fa-bed"></i> ${data2[i].camas}</li>-->
                                <li><i class="fas fa-bath"></i> ${data2[i].banos}</li>
                                <li><i class="fas fa-car"></i> ${data2[i].cochera}</li>
                            </ol>
                        </div>
                    </div>

                </figure>
            </article>
            `
            //console.log(card)

            document.getElementById('mainLista2').innerHTML = card;
    }
    card+=`</div>`
}