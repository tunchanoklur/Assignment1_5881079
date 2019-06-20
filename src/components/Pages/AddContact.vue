<template lang="html">
  <div class="background">
    <sui-card class="centered" style="width:50%;">
        <sui-card-content>
            <sui-card-header>
                <span style="font-size:24px;">Contact </span><sui-label color="teal" horizontal size="small">Add</sui-label>
            </sui-card-header>
        </sui-card-content>
      <sui-card-content>
        <sui-grid :columns="1">
            <sui-grid-column>
                <sui-form>
                    <sui-form-field>
                    <label>Contact ID<span style="color:red;">*</span></label>
                    <input placeholder="Contact ID" v-model="form.contactId" >
                    </sui-form-field>
                    <sui-form-field>
                    <label>First Name<span style="color:red;">*</span></label>
                    <input placeholder="First Name" v-model="form.firstName" >
                    </sui-form-field>
                    <sui-form-field>
                    <label>Last Name<span style="color:red;">*</span></label>
                    <input placeholder="Last Name"  v-model="form.lastName">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Mobile No<span style="color:red;">*</span></label>
                    <input placeholder="Mobile No"  v-model="form.mobileNo">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Email</label>
                    <input placeholder="Email"  v-model="form.email">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Facebook</label>
                    <input placeholder="Facebook"  v-model="form.facebook">
                    </sui-form-field>
                    <sui-form-field>
                    <label>Image Url</label>
                    <input placeholder="Image Url"  v-model="form.imageUrl">
                    </sui-form-field>
                </sui-form>
            </sui-grid-column>
        </sui-grid>
      </sui-card-content>
      <sui-card-content>
            <br>
            <sui-grid textAlign="center">
                <sui-button-group>
                    <sui-button color="blue" content="Save" icon="save" basic/>
                    <sui-button color="blue" content="Close" icon="close icon" basic @click="$router.push('/contacts')"/>
                </sui-button-group>
            </sui-grid>
            <br>
        </sui-card-content>
    </sui-card> 
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            form:{
                conatctId:"",
                firstName:"",
                lastName:"",
                mobileNo:"",
                email:"",
                facebook:"",
                imageUrl:"",
            }
        }  
    },
    methods:{
        
    }
};
</script>