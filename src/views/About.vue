<template>
  <v-layout class="text-center">
    <v-flex class="pa-6">
      <h3>Welcome to Starcoin JSON RPC API Documents</h3>
      
      <p>
        Select an API in the dropdown menu above
      </p>
      <v-flex>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: 'View', params: { apiId: 'chain' } }">Chain API</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: 'View', params: { apiId: 'contract_api' } }">Contract API</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: 'View', params: { apiId: 'state' } }">State API</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: 'View', params: { apiId: 'txpool' } }">Txpool API</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: 'View', params: { apiId: 'txpool' } }">Node API</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: 'View', params: { apiId: 'account' } }">Account API</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

     </v-flex>
      <p>
        This documents is an
        <a href="https://open-rpc.org/beginners/" target="_blank">OpenRPC</a>
        interface built using
        <a href="https://github.com/octanolabs/d0x" target="_blank">d0x</a>.
      </p>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: ["0.png", "1.png", "2.png", "3.png", "4.png"]
    };
  },
  created() {
    this.$store.commit("setEditMode", false);
    if (this.$store.state.drawers.right) {
      this.$store.commit("toggleDrawer", "right");
    }
    this.$store.commit("setApiId", "custom");
  }
};
</script>
