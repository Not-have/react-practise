import axios from 'axios'
export default function requestList(){
    // 这个里面 需要返回一个函数(因为外面会传递进来)
    return (dispatch) => {
        axios.get('https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/list').then(res => {
            console.log(res);
            dispatch({
                type: 'changeList',
                payload: res.data.list
            })
        })
    }
}