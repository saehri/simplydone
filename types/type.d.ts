declare interface Todo {
    id: number;
    title: string;
    priority: 'sooner' | 'later';
    status: 'completed' | 'uncompleted'
}