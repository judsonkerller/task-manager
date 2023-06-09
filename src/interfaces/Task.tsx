interface Task {
 id: string;
 title: string;
 description: string;
 state: "NÃO INICIADA" | "EM PROGRESSO" | "FINALIZADA" | "ARQUIVADA";
}

export default Task;
