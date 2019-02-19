import axios from 'axios';

export function startLoadNewsList() {
    return (dispatch) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            let datas = res.data;
            dispatch(loadDatas(datas));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadDatas(datas) {
    return {
        type: 'LOAD_DATAS',
        datas
    }
}

export function startLoadingComment() {
    return (dispatch) => {
        return axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            let comment = res.data;
            let listArray = [];
            for (var i = 0; i < 5; i++) {
                listArray.push(comment[i]);
            }
            dispatch(loadComment(listArray));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadComment(comment) {
    return {
        type: 'LOAD_COMMENT',
        comment
    }
}

export function startLoadingPhoto() {

}

export function loadPhoto(photo){
    return {
        type: 'LOAD_PHOTO',
        photo
    }
}