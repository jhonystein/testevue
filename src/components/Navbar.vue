<template>
  <section class="hero is-primary is-large header-image">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" href="#">
              <img src="/static/bulma-white.png" alt="Logo">
              <h2 class="title">Bikevai</h2>
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item">
              Home
            </a>
            <a class="nav-item">
              Bikes
            </a>
            <a class="nav-item">
              Serviços
            </a>
            <span class="nav-item">
              <a class="button is-success is-outlined is-inverted">
                <span class="icon">
                  <!--<i class="material-icons">&#xE851;</i>-->
                </span>
                <span>Login</span>
              </a>
            </span>
            <span class="nav-item">
              <a class="button is-info is-outlined is-inverted">
                <span class="icon">
                  <!--<i class="material-icons">&#xE146;</i>-->
                </span>
                <span>Criar Conta</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-2">
          Hero Heading
        </h1>
        <h2 class="subtitle is-5">
          A hero description could go here.
        </h2>
        <p>
          <a class="button is-outlined">
            <span class="icon">
              <i class="fa fa-download"></i>
            </span>
            <span>
              Download
            </span>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
      padding-bottom: 10rem;
      padding-top: 10rem;
  }
}

.header-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.49),rgba(0, 0, 0, 0.89)),url('https://images.unsplash.com/1/iphone-4-closeup.jpg?dpr=1&auto=format&crop=middle&fit=crop&w=2000&h=500&q=80');
}

.is-outlined {
  background-color:transparent;
  color:#fff;
}
</style>
