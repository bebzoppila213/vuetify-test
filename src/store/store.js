import { createStore } from "vuex";

const employeModule = {
    state: [{
            employmentDate: "0123-03-12",
            employmentRecord: true,
            firstName: "Иван",
            id: 1687654947962,
            lastName: "Плюшкин",
            patronymic: "Сергеевич",
            position: "Инженер",
            rate: "Полная",
            salary: 55.7303612385321,
        },
        {
            employmentDate: "0123-05-12",
            employmentRecord: true,
            firstName: "Андрей",
            id: 1687654947963,
            lastName: "Васильев",
            patronymic: "Алексеевич",
            position: "Бухгалтер",
            rate: "Полная",
            salary: 55.7303612385321,
        },
    ],


    getters: {
        getEmployeById(state) {
            return (id) => state.find((emp) => emp.id === id);
        },
    },

    mutations: {
        changeEmploye(state, employeData) {
            state = state.map((emp) =>
                emp.id === employeData.id ? employeData : emp
            );
        },

        createEmploye(state, employeData) {
            state.push({ id: Date.now(), ...employeData });
        },

        deleteEmploye(state, deleteData) {
            state = state.filter(
                (emp) => emp.id !== deleteData.id
            );
        },
    },
};

export const store = createStore({
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    },
    modules: {
        employees: employeModule,
    }
});

store.subscribe((mutation, state) => {
    localStorage.setItem("store", JSON.stringify(state));
});