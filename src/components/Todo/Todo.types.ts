interface DeleteTodoEvent extends CustomEvent {
    detail: {
        index: number;
    };
}

export type { DeleteTodoEvent };