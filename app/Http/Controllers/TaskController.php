<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Auth::user()->tasks;
        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'name' => 'required',
            'due_date' => 'required',
        ]);

        // dd($request['due_date']);

        $task = Task::create([
            'name' => $request['name'],
            'due_date' => $request['due_date'],
            'is_complete' => false,
            'user_id' => Auth::id()
        ]);

        return redirect(route('tasks.show', ['task' => $task]));
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return Inertia::render('Tasks/Show', ['task' => $task]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        return Inertia::render('Tasks/Edit', ['task' => $task]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $request->validate([
            'name' => 'required',
            'due_date' => 'required',
        ]);

        $task->name = $request['name'];
        $task->due_date = $request['due_date'];
        $task->is_complete = $request['is_complete'];
        $task->user_id = Auth::id();

        $task->save();
        return redirect(route('tasks.update', ['task' => $task]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task): RedirectResponse
    {
        Task::destroy($task->id);

        return redirect(route('tasks.index'))
            ->with('info', 'Task successfully deleted');
    }
}
