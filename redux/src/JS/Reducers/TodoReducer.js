import {
    ADD_TODO,
    DELETE_TODO,
    FILTER_TODO,
    FILTER_ALL,
    FILTER_TRUE
} from "../ActionsTypes/TodoActionsType";

const initialState = {todo:[
    {
        id:1,
        doneornot:false,
        content:'Go to the Gym'


    },
    {
        id:2,
        doneornot:true,
        content:'Doing Homework'


    },
    {
        id:3,
        doneornot:false,
        content:'Hanging out with friends'


    }
]};
const filterData = initialState;
const filterData2 = initialState;

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(
                    (TO) => TO.id !== action.payload
                ),
            };
        case FILTER_TODO:
            return{
                ...filterData,
                todo: filterData.todo.filter((TO)=> TO.doneornot == false)
            }
        case FILTER_TRUE:
            return{
                ...filterData2,
                todo: filterData2.todo.filter((TO)=> TO.doneornot == true)
            }
        case FILTER_ALL:
            return state;
        
            
        default:
            return state;
    }
};
