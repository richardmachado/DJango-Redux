import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

// GET LEADS

export const getLeads = () => dispatch => {
    axios.get('/api/leads')
        .then(res => {
            dispatch(createMessage({ leadAdded: 'Lead Added' }));
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//DELETE LEADS

export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        }).catch(err => console.log(err));
};

//ADD LEAD

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
    axios
    .post('/api/leads/', lead,)
    .then((res) => {
        dispatch(createMessage({ addLead: 'Lead Added' }));
        dispatch({
            type: ADD_LEAD,
            payload: res.data,
        });
        })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};