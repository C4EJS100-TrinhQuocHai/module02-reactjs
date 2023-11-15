/* viết 1 cái hàm để tạo ra các action
 */
 export const action=(type,payload)=>{
    return {
        type:type,
        payload:payload,
    }
}