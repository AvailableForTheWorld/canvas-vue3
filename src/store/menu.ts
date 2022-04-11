import { defineStore } from 'pinia'

export const useSelect = defineStore('select',{
    state: ()=>{
        return {
            isSelect: false,
        }
    }
})