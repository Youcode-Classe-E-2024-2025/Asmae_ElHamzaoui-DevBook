
<head>
  <meta charset="UTF-8">
  <title>Inscription</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<div class="min-h-screen bg-gray-900 flex items-center justify-center p-6">
  <form class="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold text-gray-100 mb-6 text-center">Connexion</h2>
    
    <label class="block text-gray-300 mb-2">Email</label>
    <input type="email" placeholder="email@example.com" class="w-full p-3 rounded-xl bg-gray-700 text-white mb-4 outline-none focus:ring-2 focus:ring-yellow-500">

    <label class="block text-gray-300 mb-2">Mot de passe</label>
    <input type="password" placeholder="********" class="w-full p-3 rounded-xl bg-gray-700 text-white mb-6 outline-none focus:ring-2 focus:ring-yellow-500">

    <button class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl transition duration-300">
      Se connecter
    </button>
  </form>
</div>
