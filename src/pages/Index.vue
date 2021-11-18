<template>
  <Layout>
    <section class="mt-5">
        <b-tabs v-model="tab" position="is-centered" class="block">
            <b-tab-item label="Pictures"></b-tab-item>
            <b-tab-item label="Music"></b-tab-item>
            <b-tab-item label="Videos"></b-tab-item>
        </b-tabs>
    </section>

  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-4" v-for="edge in $page.users.edges" :key="edge.node.id">
        <div class="card m-4">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-24x24">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ edge.node.name }}</p>
                <p class="subtitle is-6"> {{ edge.node.email }}</p>
              </div>
            </div>

            <div class="content">
              <p>
                {{ edge.node.company }}
              </p>
              <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </Layout>
</template>

<page-query>

  query {
    users: allUsers {
      edges {
        node {
          name
          email
          phone
          company
        }
      }
    }
  }

</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  data() {
    return {
      tab: 0
    }
  },

  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllEvents()
    } else {
        this.showEventsByType()
      }
    }
  },

  methods: {
    showAllEvents() {
      console.log('All');
    },

    showEventsByType() {
      console.log('Type');
    }
  }
}
</script>