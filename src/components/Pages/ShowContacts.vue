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
                    <sui-input style="width:82%;" placeholder="Search..."/>
                    <sui-button-group>
                        <sui-button content="Search"/>
                        <sui-button content="Add" icon="add" color="orange"/>
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
                    Add card component
                <!--card component here-->
                </sui-card-content>
            </sui-card>
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