<template>
    <form @submit="handleSubmit">
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="inputEmail">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" required v-model="email">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="inputMessage">Message</label>
            <div class="col-sm-10">
                <textarea class="form-control" id="inputMessage" rows="3" required v-model="message"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p>Email: {{email}} </p>
    <p>Message: {{message}} </p>
</template>

<script>
export default {
    data() {
        return {
        email: '',
        message: '',
        passwordError: '',
        }
    },
    methods: {
        handleSubmit() {
            console.log("form submitted");
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
    padding: 50px;
    background-color: lightgrey;
    text-align: left;
}
</style>