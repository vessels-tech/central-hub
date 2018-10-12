'use strict'

import 'isomorphic-fetch'
import * as actions from './actions'

const handleErrors = (response) => {
  if (!response.ok) throw Error(response.statusText)
  return response.json()
}

const lookupMembers = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.MEMBERS_LOOKUP })

    return fetch('/api/accounts', { method: 'get' })
      .then(handleErrors)
      .then(members => dispatch({ type: actions.MEMBERS_LOOKUP_SUCCEEDED, payload: members }))
      .catch(error => dispatch({ type: actions.MEMBERS_LOOKUP_FAILED, payload: error.message }))
  }
}

const createMember = (newMemberData) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.MEMBERS_CREATE_REQUEST, payload: newMemberData })

    return fetch('/api/accounts', {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(newMemberData)
    })
      .then(handleErrors)
      .then(member => dispatch({ type: actions.MEMBERS_CREATE_SUCCEEDED, payload: newMemberData }))
      .catch(error => dispatch({ type: actions.MEMBERS_CREATE_FAILED, payload: { errorMessage: error.message, member: newMemberData } }))
  }
}

const editMember = (editMemberData) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.MEMBER_EDIT_REQUEST, payload: editMemberData })

    return fetch(`/api/accounts/${editMemberData.name}`, {
      method: 'put',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_disabled: editMemberData.isDisabled })
    })
      .then(handleErrors)
      .then(member => dispatch({ type: actions.MEMBER_EDIT_SUCCEEDED, payload: editMemberData }))
      .catch(error => dispatch({ type: actions.MEMBER_EDIT_FAILED, payload: { errorMessage: error.message, member: editMemberData } }))
  }
}

const lookupMember = (lookupMemberData) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.MEMBER_LOOKUP, payload: lookupMemberData })

    return fetch(`/api/accounts/${lookupMemberData.name}`, { method: 'get' })
      .then(handleErrors)
      .then(lookedUpMember => dispatch({ type: actions.MEMBER_LOOKUP_SUCCEEDED, payload: [lookedUpMember] }))
      .catch(error => dispatch({ type: actions.MEMBER_LOOKUP_FAILED, payload: { errorMessage: error.message, member: lookupMemberData } }))
  }
}

export {
  lookupMembers,
  createMember,
  editMember,
  lookupMember
}
