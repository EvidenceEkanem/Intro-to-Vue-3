app.component('product-details', {
    template:
    /*html*/
    `<p>{{details}}</p>`,
    props: {
        details: {
            type: String,
            required: true
        }
    }
});