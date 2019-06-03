let filmInfo = ['The Godfather (1972)','The Shawshank Redemption (1994)', 'The Dark Knight (2008)',
    '12 Angry Men (1957)',  'Schindler\'s List (1993)','The Lord of the Rings: The Return of the King (2003)', ];

let filmNum = '1';

let templateFilm = ``

for (let i = 0; i < filmInfo.length; i++) {
    templateFilm = templateFilm +`

<div class="film-wrap">
    <p class="film-info"> ${filmInfo[i]}</p>
    <div class="star-rating">
        <div class="star-rating__wrap">
            <input class="star-rating__input" id="star-rating-5-${[i]}" type="radio" name="rating" value="5"/>
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5-${[i]}" title="5 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-4-${[i]}" type="radio" name="rating" value="4"/>
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4-${[i]}" title="4 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-3-${[i]}" type="radio" name="rating" value="3"/>
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3${[i]}" title="3 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-2-${[i]}" type="radio" name="rating" value="2"/>
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2-${[i]}" title="2 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-1-${[i]}" type="radio" name="rating" value="1"/>
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1-${[i]}" title="1 out of 5 stars"></label>
        </div>
    </div>
</div>

`;
}

document.body.innerHTML = document.body.innerHTML + templateFilm;
