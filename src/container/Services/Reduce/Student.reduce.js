import { DELETESTU, SINGLESTU, STUDENT, UPDATEDATA } from "../const";

const storedData = JSON.parse(localStorage.getItem('students')) || [];

const initialState = {
    students: storedData,
    student: null
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case STUDENT:
            const updatedStudents = [...state.students, action.payload];
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            return { ...state, students: updatedStudents };

        case SINGLESTU:
            const selectedStudent = state.students.find(data => data.id === action.payload);
            return { ...state, student: selectedStudent };

        case DELETESTU:
            const remainingStudents = state.students.filter(data => data.id !== action.payload);
            localStorage.setItem("students", JSON.stringify(remainingStudents));
            return { ...state, students: remainingStudents };

        case UPDATEDATA:
            const updatedData = state.students.map((data) => {
                if (data.id === action.payload.id) {
                    return action.payload;
                } else {
                    return data;
                }
            });
            localStorage.setItem("students", JSON.stringify(updatedData));
            return {
                ...state,
                students: updatedData
            };

        default:
            return state;
    }
};

export default studentReducer;
