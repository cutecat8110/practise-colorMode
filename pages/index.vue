<template>
  <div class="home_root">
    <nav class="navbar">Title</nav>
    <div class="container">
      <div>
        colorMode:
        <button type="button" @click="setMode('red')" class="red">red</button>
        <button type="button" @click="setMode('blue')" class="blue">blue</button>
        <button type="button" @click="setMode('green')" class="green">green</button>
        <button type="button" @click="setDarkMode()" class="dark">dark</button>
      </div>
      <h2 class="title">What is Lorem Ipsum?</h2>
      <p class="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>
    </div>
    <footer>Copyright 2018</footer>
  </div>
</template>

<script setup>
const setMode = (mode) => {
  // document.documentElement.style.setProperty('--main-hue', `var(--${mode}-hue)`)
  document.documentElement.setAttribute('theme', mode)
}

const setDarkMode = () => {
  if (document.documentElement.hasAttribute('dark')) {
    document.documentElement.removeAttribute('dark')
  } else {
    document.documentElement.setAttribute('dark', '')
  }
}
</script>

<style lang="scss" scoped>
.home_root {
  display: flex;
  flex-direction: column;
}
nav {
  padding: 1.3rem;
  background: var(--nav-bg-color);
  color: var(--nav-text-color);
}
.container {
  flex: 1;
  padding: 1rem;
  background: var(--container-bg-color);
}
p.content {
  padding: 0.7rem;
  font-size: 0.7rem;
  color: var(--content-text-color);
}
.container h2.title {
  padding: 1rem;
  color: var(--title-color);
}
footer {
  padding: 1rem;
  background: var(--footer-bg-color);
}
button {
  padding: 0.2rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  &.red {
    color: hsl(var(--red-hue), 50%, 20%);
    background: hsl(var(--red-hue), 50%, 90%);
    border: 1px solid hsl(var(--red-hue), 50%, 20%);
  }
  &.blue {
    color: hsl(var(--blue-hue), 50%, 20%);
    background: hsl(var(--blue-hue), 50%, 90%);
    border: 1px solid hsl(var(--blue-hue), 50%, 20%);
  }
  &.green {
    color: hsl($green, 50%, 20%);
    background: hsl($green, 50%, 90%);
    border: 1px solid hsl($green, 50%, 20%);
  }
}
</style>
