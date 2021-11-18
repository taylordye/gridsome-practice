<template>
<div class="layout">
  <b-navbar>
      <template #brand>
          <b-navbar-item>
            <g-link to='/'>
              Home
            </g-link>
          </b-navbar-item>
      </template>
      <template #start>
          <b-navbar-item>
            <g-link to='/about/'>
              About
            </g-link>
          </b-navbar-item>
          <b-navbar-dropdown label="More Shit">
              <b-navbar-item href="#">
                  Blog
              </b-navbar-item>
              <b-navbar-item href="#">
                  Contact
              </b-navbar-item>
          </b-navbar-dropdown>
      </template>

      <template #end>
          <b-navbar-item tag="div">
              <div class="buttons">
                  <a class="button is-primary">
                      <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">
                      Log in
                  </a>
              </div>
          </b-navbar-item>
      </template>
  </b-navbar>

  <!-- Page content -->
  <slot/>


</div>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>
