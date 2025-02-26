<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">

<div class="d-flex justify-content-between align-items-center mb-4">
    <h2>To-Do List</h2>

    <!-- Logout Form -->
    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit" class="btn btn-secondary">Logout</button>
    </form>
</div>

<!-- Add Task Form -->
<form action="{{ route('tasks.store') }}" method="POST" class="d-flex mb-3">
    @csrf
    <input type="text" name="name" class="form-control me-2" placeholder="Enter task..." required>
    <button type="submit" class="btn btn-primary">Add Task</button>
</form>

<!-- Task List -->
<ul class="list-group">
    @foreach ($tasks as $task)
        <li class="list-group-item d-flex justify-content-between align-items-center">
            {{ $task->name }}

            <!-- Delete Button -->
            <form action="{{ route('tasks.destroy', $task->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
            </form>
        </li>
    @endforeach
</ul>

</body>
</html>
