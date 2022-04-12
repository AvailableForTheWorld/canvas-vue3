import { defineStore } from 'pinia'

export const useSelect = defineStore('select',{
    state: ()=>{
        return {
            isSelect: {
                bool: false,
                index: 0
            },
        }
    }
})