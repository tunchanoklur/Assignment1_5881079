<template lang="html">
  <div class="background">
    <sui-card class="centered" style="width:99%;">
      <sui-card-content>
        <sui-grid :columns="1">
            <sui-grid-column>
            <sui-segment raised>
                <div is="sui-label" color="teal" ribbon>
                <b style="font-size:18px;">Contacts</b>
                </div>
                <span>
                    <sui-input style="width:80%;" placeholder="Search..."/>
                    <sui-button-group>
                        <sui-button content="Search" icon="search"/>
                        <sui-button content="Add" icon="add" color="orange" @click="$router.push('/addcontact')"/>
                    </sui-button-group>
                </span>
            </sui-segment>
            <sui-card style="width:100%;">
                <sui-card-content>
                <br>
                </sui-card-content>
            </sui-card>
            <sui-card style="width:100%;">
                <sui-card-content>
                    <sui-card-group :items-per-row="4">
                        <contactcard :data="test" @edititem="edititem" @deleteitem="deleteitem"></contactcard>
                        <contactcard :data="test" @edititem="edititem" @deleteitem="deleteitem"></contactcard>
                        <contactcard :data="test" @edititem="edititem" @deleteitem="deleteitem"></contactcard>
                        <contactcard :data="test" @edititem="edititem" @deleteitem="deleteitem"></contactcard>
                    </sui-card-group>
                </sui-card-content>
            </sui-card>
        </sui-grid-column>
        </sui-grid>
      </sui-card-content>
    </sui-card> 
  </div>
</template>

<script>
import contactcard from '@/components/Components/ContactCard'
export default {
    components:{contactcard},
    data:function(){
        return{
            test:{
                id_:"123456",
                firstName:"Tunchanok",
                lastName:"Lur",
                middleName:"kik",
                gender:"F",
                email:"kik@gmail.com",
                mobile:"+66 829999999",
                facebook:"kik lur"
            }
        }  
    },
    methods:{
        edititem(data){
            console.log("edit")
            console.log(data)
            let tmp = {
                path:'/editcontact',
                params:{
                    data:data
                }
            }
            console.log(tmp)
            this.$router.push({
                path:'/editcontact',
                query:{
                    data:data
                }
            })
        },
        deleteitem(data){
            console.log("delete")
            console.log(data)
        }
    }
};
</script>

<style scoped>
.ui.raised.segment, .ui.raised.segments {
    -webkit-box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);
    box-shadow: 0 2px 2px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);
}
.ui.segment {
    border-top: 3px solid #5DBCD2;
}
</style>