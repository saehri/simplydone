declare interface Todo {
	id: string;
	title: string;
	priority: 'sooner' | 'later';
	status: 'completed' | 'uncompleted';
}
