<template>
    <div class="home">
      <h1>Welcome to the Multi-App Project</h1>
      <p>Select an app to get started:</p>
      <nav>
        <ul>
          <li><router-link to="/notes">Notes App</router-link></li>
          <li><router-link to="/counter">Counter App</router-link></li>
          <li><router-link to="/quiz">Quiz App</router-link></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  // No additional script setup needed for this example
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .home h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .home p {
    font-size: 1.2em;
    margin-bottom: 30px;
  }
  
  .home nav ul {
    list-style: none;
    padding: 0;
  }
  
  .home nav li {
    margin: 10px 0;
  }
  
  .home nav a {
    text-decoration: none;
    color: #42b983;
    font-size: 1.5em;
  }
  
  .home nav a:hover {
    text-decoration: underline;
  }
  </style>
  