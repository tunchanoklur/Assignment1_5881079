<template lang="html">
    <sui-card>
        <sui-image v-if="true" :src="data.imageUrl"/>
        <sui-image v-else src="https://semantic-ui-vue.github.io/static/images/wireframes/image.png"/>
        <sui-card-content>
            <sui-container text-align="center">
                <sui-card-header style="font-size:19px;"><b>{{data.firstName}} {{data.lastName}}</b></sui-card-header>
                <sui-card-meta>Mobile: {{data.mobileNo}}</sui-card-meta>
                <sui-card-meta>Email: {{data.email}}</sui-card-meta>
                <sui-card-meta>Facebook: {{data.facebook}}</sui-card-meta>
            </sui-container>
        </sui-card-content>
        <sui-card-content extra>
            <sui-container text-align="center">
                <sui-button icon="edit" color="blue" @click="edititem"/>
                <sui-button icon="erase" color="red"  @click="deleteitem"/>
            </sui-container>
        </sui-card-content>
      </sui-card>
</template>
<script>
export default {
    props:['data'],
    methods:{
        edititem(){
            this.$emit('edititem',this.data)
        },
        deleteitem(){
            this.$emit('deleteitem',this.data)
        }
    }
};
</script>