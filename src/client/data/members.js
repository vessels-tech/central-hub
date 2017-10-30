'use strict'

import randomString from 'randomstring'
let members

const createMember = () => {
  const name = randomString.generate(8)
  const id = `http://central-ledger/accounts/${name}`
  return {
    name,
    id,
    is_disabled: false,
    created: new Date().toISOString()
  }
}

const createMembers = () => {
  if (!members) {
    members = []
    for (let i = 0; i < 20; i++) {
      members.push(createMember())
    }
  }
  return members
}

export default createMembers()
