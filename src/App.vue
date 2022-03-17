<script>
import Home from "./components/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>

<template>
  <Home />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}

.form-container {
  width: 100%;
  margin: 2rem 0;
}
.form-container__title {
  font-size: 2rem;
  color: #363f5f;
  margin-bottom: 1rem;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  box-shadow: 0px 0px 5px #ccc;
}
.form__item {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form__item label {
  color: #000b0d;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.form__item input,
.form__item select {
  width: 100%;
  border: none;
  padding: 1rem;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 0.4rem;
}
.form-container button {
  background: #363f5f;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 1rem;
  font-size: 1.6rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: background 0.3s;
}
.form-container button:hover {
  background: #000b0d;
}
@media screen and (max-width: 768px) {
  .form {
    flex-direction: column;
    align-items: initial;
  }
}
</style>
