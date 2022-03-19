app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="handleFormSubmission">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="question" class="mt-1">Question:</label>
      <select id="question" v-model.number="question">
        <option>Yes</option>
        <option>No</option>
      </select>
      
      <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        question: ''
      }
    },
    methods: {
        handleFormSubmission() {

            if(this.name == '', this.review == '', this.rating == null, this.question == '' ){
                alert("Review is incomplete, please fill out every field");
                return;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                question: this.question
            };

            this.$emit('review-payload', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
            this.question = '';
        }
    }
  })