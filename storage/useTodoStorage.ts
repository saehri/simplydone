import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageTypes = {
	todos: Todo[];
	addTodo: (payload: Todo) => void;
};

const useTodoStore = create(
	persist(
		(set) => ({
			todos: [
				{
					id: '1',
					title: 'Hello from task 1',
					priority: 'sooner',
					status: 'uncompleted',
				},
				{
					id: '2',
					title: 'Hello from task 2',
					priority: 'sooner',
					status: 'uncompleted',
				},
				{
					id: '3',
					title: 'Hello from task 3',
					priority: 'later',
					status: 'uncompleted',
				},
				{
					id: '4',
					title: 'Hello from task 4',
					priority: 'later',
					status: 'uncompleted',
				},
			],
			addTodo: (payload: Todo) => {
				set((state: StorageTypes) => ({ todos: [...state.todos, payload] }));
			},
			toggleTodo: (id: string) => {
				set((state: StorageTypes) => ({
					todos: (() => {
						const selectedTodo = state.todos.filter(
							(todo) => todo.id === id
						)[0];
						selectedTodo.status =
							selectedTodo.status === 'completed' ? 'uncompleted' : 'completed';
						const newState = state.todos.filter((todo) => todo.id !== id);
						return [selectedTodo, ...newState];
					})(),
				}));
			},
			moveCategory: (id: string) => {
				set((state: StorageTypes) => ({
					todos: (() => {
						const selectedTodo = state.todos.filter(
							(todo) => todo.id === id
						)[0];
						selectedTodo.priority =
							selectedTodo.priority === 'sooner' ? 'later' : 'sooner';
						const newState = state.todos.filter((todo) => todo.id !== id);
						return [...newState, selectedTodo];
					})(),
				}));
			},
			deleteTodo: (id: string) => {
				set((state: StorageTypes) => ({
					todos: state.todos.filter((todo) => todo.id !== id),
				}));
			},
		}),
		{
			name: 'todo-storage',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);

export default useTodoStore;
