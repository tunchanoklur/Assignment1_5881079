<template lang="html">
  <div class="background">
    <sui-card class="centered" style="width:50%;">
        <sui-card-content>
            <sui-card-header>
                <span style="font-size:24px;">Contact </span><sui-label color="teal" horizontal size="small">Edit</sui-label>
            </sui-card-header>
        </sui-card-content>
      <sui-card-content>
        <sui-grid :columns="1">
            <sui-grid-column>
                <sui-form>
                    <span v-if="showerrmsg" style="font-size:15px;color:red;">Please enter all required field<br><br></span>
                    <sui-form-field>
                    <label>Contact ID<span style="color:red;">*</span></label>
                    <input placeholder="Contact ID" v-model="data.contactId" >
                    </sui-form-field>
                    <sui-form-field>
                    <label>First Name<span style="color:red;">*</span></label>
                    <input placeholder="First Name" v-model="data.firstName" >
                    </sui-form-field>
                    <sui-form-field>
                    <label>Last Name<span style="color:red;">*</span></label>
                    <input placeholder="Last Name"  v-model="data.lastName">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Mobile No<span style="color:red;">*</span></label>
                    <input placeholder="Mobile No"  v-model="data.mobileNo">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Email</label>
                    <input placeholder="Email"  v-model="data.email">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Facebook</label>
                    <input placeholder="Facebook"  v-model="data.facebook">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Image Url</label>
                    <input placeholder="Image Url"  v-model="data.imageUrl">
                    </sui-form-field>
                </sui-form>
            </sui-grid-column>
        </sui-grid>
      </sui-card-content>
      <sui-card-content>
          <br>
            <sui-grid textAlign="center">
                <sui-button-group>
                    <sui-button color="blue" content="Save" icon="save" basic @click="confirmEdit"/>
                    <sui-button color="blue" content="Close" icon="close icon" basic @click="$router.push('/contacts')"/>
                </sui-button-group>
            </sui-grid>
            <br>
        </sui-card-content>
    </sui-card> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return{
            showerrmsg:false, //show error message
            data:{}
        }  
    },
    created(){
        this.data = this.$route.query.data
        console.log(this.data)
    },
    methods:{
        async confirmEdit(){
            console.log("Edit")
            if(this.invalid_input()){
                console.log("Invalid input")
                this.showerrmsg = true
            }
            else{
                console.log("Editing ..")
                let tmp_id = this.data._id
                delete this.data._id
                console.log(tmp_id)
                await axios.post('/contacts/update',{
                    criteria:{
                        _id:tmp_id
                    },
                    data:{
                        $set:this.data
                    }
                })
                console.log("Done")
                this.$router.push('/contacts') 
            } 
        },
        invalid_input(){
            if(this.data.contactId==="" || this.data.firstName==="" ||this.data.lastName===""||this.data.mobileNo==="")return true
            else return false
        }
    }
};
</script>