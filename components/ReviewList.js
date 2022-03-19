app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
        <div class="review-container">
            <h3>Reviews: </h3>
            <ul>
                <li v-for="(rv, index) in reviews" :key="index">
                    {{rv.name}} gave this {{rv.rating}} stars
                    <br />
                    "{{rv.review}}"
                    <br />
                    <small>Would Recommend Product?: {{rv.question}}</small>
                </li>
            </ul>
        </div>
    `
})