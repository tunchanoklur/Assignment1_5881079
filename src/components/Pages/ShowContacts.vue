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
                    <sui-input placeholder="Search..." style="width:80%;" v-model="search"/>
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
                        <contactcard v-for="data in datas_computed" :key="data.id_" :data="data" @edititem="edititem" @deleteitem="deleteitem"></contactcard>
                    </sui-card-group>
                </sui-card-content>
            </sui-card>
        </sui-grid-column>
        </sui-grid>
      </sui-card-content>
    </sui-card>
    <!-- delete modal -->
    <sui-modal v-model="show_modal" :closable="false">
      <sui-modal-header>Contact Delete Confirmation</sui-modal-header>
      <sui-modal-content image>
        <sui-modal-description>
          <div style="font-size:18px;">Would you like to delete the contact?</div>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button @click="confirmDelete" positive>Yes</sui-button>
        <sui-button @click="show_modal=false;deletedata={};">No</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import axios from 'axios'
import contactcard from '@/components/Components/ContactCard'
export default {
    components:{contactcard},
    data:function(){
        return{
            datas:[],
            show_modal:false,
            deletedata:{},
            search:""
        }  
    },
    beforeMount(){
        this.getdata();
    },
    computed:{
        datas_computed(){
            return this.datas.filter((data) => {
                return this.search.toLowerCase().split(' ').every(v => data.firstName.toLowerCase().includes(v)||data.lastName.toLowerCase().includes(v));
            });
        }
    },
    methods:{
        getdata(){
            let self = this
            axios.get('/contacts/getMany')
            .then(function(res){
                if(res){
                    // console.log(res)
                    self.datas = res.data
                }
            })   
        },
        edititem(data){
            console.log("edit")
            console.log(data)
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
            this.show_modal = true
            this.deletedata = data
        },
        async confirmDelete(){
            console.log("confirm delete")
            this.show_modal = false
            await axios.post('/contacts/delete',this.deletedata)
            this.deletedata = {}
            console.log("done delete")
            this.getdata()
            console.log("done get data")
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