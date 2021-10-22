


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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d421618.3813735628!2d-73.14409369458946!3d40.794701528737775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1634922925980!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        <div class="card__info__item">
                            <p>1100 Bear </p>
                            <p   id="direccion${i}">${data2[i].direccion} <i class="fas fa-map-marker-alt"></i></p>
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