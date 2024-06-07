<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document - @yield('title')</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>

<body class="container">
    <div class="mt-4 mb-3 ">
        @component('components/input')
        @endcomponent
    </div>
    @component('components/todo-card')
        comprar comida
    @endcomponent
</body>

</html>
