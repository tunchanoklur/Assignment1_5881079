<template lang="html">
  <div class="background">
    <sui-card class="centered" style="width:25%;">
      <sui-card-content>
        <sui-grid :columns="1">
            <sui-grid-column>
            <sui-segment raised id="box">
                <div is="sui-label" color="teal" ribbon>
                <b style="font-size:18px;">Login</b>
                </div>
                <span> </span>
            </sui-segment>
            
        <sui-form>
            <sui-form-field>
              <span style="font-size:15px;"><b>User Account</b></span>
              <sui-input
              type="text"
              placeholder="User Account"/>
            </sui-form-field>
            <sui-form-field>
              <span style="font-size:15px;"><b>Password</b></span>
              <sui-input
              type="password"
              placeholder="Password"/>
            </sui-form-field>
            <sui-button>Login</sui-button>
        </sui-form>
        </sui-grid-column>
        </sui-grid>
      </sui-card-content>
    </sui-card> 
  </div>
</template>

<script>
export default {
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