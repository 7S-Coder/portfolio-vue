<script setup></script>

<template>
  <form action="POST" name="contact" id="contact">
    <h2>Contact</h2>
    <div>
      <label for="name">Nom :</label>
      <input id="name" name="name" type="text" required />

      <label for="first-name">Prénom :</label>
      <input id="first-name" name="first-name" type="text" required />
    </div>

    <label for="content">Contenu du message :</label>
    <textarea id="content" name="content" rows="10" required></textarea>

    <button type="submit" id="submit">Envoyer</button>
  </form>
</template>

<style scoped>
form {
  background-color: #e4d7c4;
  color: white;
  font-size: 1.2em;
  margin-top: 20px;
  padding: 27px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

#content,
form > div input {
  box-shadow: none;
  border-color: white;
  width: 100%;
  border-radius: 5px;
  margin: 5px 0;
}

h2 {
  margin: 10px 0;
}

#submit {
  width: 50%;
  max-width: 200px;
  height: 40px;
  align-self: center;

  border-color: none;
  border-radius: 5px;
  margin: 15px 0 20px;

  color: white;
  background-color: #334447;
  transition: 0.25s ease-in-out;
}

#submit:hover {
  background-color: white;
  color: black;
}

@media (min-width: 426px) {
  form {
    padding: 27px 30px;
  }
}
</style>
