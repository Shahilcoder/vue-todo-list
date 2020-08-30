<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <p class="display-4">Vue Todo List</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <NewTodo @on-addtodo="addTodo($event)" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="list-group">
                    <Todo v-for="(todo, index) in todos" :key="index"
                    :todoString="todo.todoString"
                    :completed="todo.completed"
                    @on-delete="deleteTodo(todo)"
                    @on-toggle="toggleTodo(todo)"
                    @on-edit="editTodo(todo, $event)"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Todo from "./Todo"
    import NewTodo from "./NewTodo"
    export default {
        components: {
            Todo,
            NewTodo,
        },
        data() {
            return {
                todos: [
                    {todoString: "Watch Angular Course", completed: false},
                    {todoString: "Cook some food", completed: true},
                    {todoString: "Watch Youtube Videos", completed: true},
                    {todoString: "Publish These videos", completed: false},
                ],
            };
        },
        methods: {
            addTodo(newTodo){
                this.todos.push({todoString: newTodo, completed: false});
            },
            toggleTodo(todo){
                todo.completed = !todo.completed;
            },
            editTodo(todo, newTodoString){
                todo.todoString = newTodoString;
            },
            deleteTodo(deleteTodo){
                this.todos = this.todos.filter(
                    todo => todo !== deleteTodo // todo => todo.todoString !== deleteTodo.todoString
                );
            },
        }
    }
</script>

<style>

</style>