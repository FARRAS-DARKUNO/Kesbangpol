import axios from "axios";

export const GET_DETAIL_PAGE = 'GET_DETAIL_PAGE'
export const GET_NEWS = 'GET_NEWS'

export const getDetail = () => {
    try {
        return async dispatch => {
            return axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
                .then(({ data }) => {
                    dispatch(
                        {
                            type: GET_DETAIL_PAGE,
                            payload: data
                        }
                    );
                })
        }
    } catch (error) {
        console.log(error);
    }
}

export const getNews = () => {
    try {
        return async dispatch => {
            return axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
                .then(({ data }) => {
                    dispatch(
                        {
                            type: GET_NEWS,
                            payload: data
                        }
                    );
                })
        }
    } catch (error) {
        console.log(error);
    }
}