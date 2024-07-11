<script setup>
// No additional script setup needed for this example
</script>

<template>
    <header class="app-header">
      <h1>Multi-App Project</h1>
      <nav>
        <ul>
          <li><router-link to="/notes">Notes App</router-link></li>
          <li><router-link to="/counter">Counter App</router-link></li>
          <li><router-link to="/quiz">Quiz App</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  
  <style scoped>
  .app-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: white;
  }
  
  .app-header h1 {
    margin: 0;
  }
  
  .app-header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .app-header nav li {
    margin-left: 20px;
  }
  
  .app-header nav a {
    color: white;
    text-decoration: none;
  }
  
  .app-header nav a:hover {
    text-decoration: underline;
  }
  </style>
  