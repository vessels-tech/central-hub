'use strict'

import Login from './components/Login';
import Unauthenticated from './components/Unauthenticated';
import App from './modules/app';
import Dashboard from './components/dashboard';
import Members from './connected/members';
import Transfers from './connected/transfers';
import Positions from './connected/positions';
import Charges from './connected/charges';
import CreateMember from './connected/membersCreate';

import EditMember from './connected/membersEdit';

export default {
  childRoutes: [
    {
      component: Unauthenticated,
      childRoutes: [
        {
          path: '/login',
          component: Login
        }
      ]
    },
    {
      path: '/',
      component: App,
      indexRoute: {
        component: Dashboard
      },
      childRoutes: [
        {
          path: 'members',
          component: Members
        },
        {
          path: 'positions',
          component: Positions
        },
        {
          path: 'members/create',
          component: CreateMember
        },
        {
          path: 'members/:id/edit',
          component: EditMember
        },
        {
          path: 'transfers',
          component: Transfers
        },
        {
          path: 'charges',
          component: Charges
        }
      ]
    }
  ]
}
