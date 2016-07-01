import { combineReducers } from 'redux'
import {
  SELECT_DASHBOARD
} from '../actions/dashboard'

import {
  LOGIN_SUBMITTED,
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGOUT
} from '../actions/login'

import {
  ROLE_CUSTOMER_SERVICE,
  ROLE_ENGINEER,
  ROLE_REPO_MANAGER,
  ROLE_TASK_SCHEDULER,
  ROLE_SUPERUSER
} from '../const/role'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

function selectedDashboard(state=DASHBOARD_WELCOME, action) {
  switch (action.type) {
    case SELECT_DASHBOARD:
      return action.dashboard
    default:
      return state
  }
}

function userInfo(state={}, action) {
  return {
    username: username(state.username, action),
    password: password(state.password, action),
    isLogin: isLogin(state.isLogin, action),
    role: role(state.role, action)
  }
}

function username(state="", action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.username
    case LOGIN_FAILED:
    case LOGOUT:
      return ""
    default:
      return state
  }
}

function password(state="", action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.password
    case LOGIN_FAILED:
    case LOGOUT:
      return ""
    default:
      return state
  }
}

function isLogin(state=false, action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return true
    case LOGIN_FAILED:
    case LOGOUT:
      return false
    default:
      return state
  }
}

function role(state=ROLE_SUPERUSER, action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.role
    case LOGIN_FAILED:
    case LOGOUT:
      return ""
    default:
      return state
  }
}

function dashboardByName(state={
  [DASHBOARD_CLIENT]: [
    {
      "created" : 1466928449000,
      "updated" : 1466928449000,
      "userId" : "420104199601021617",
      "type" : 1,
      "companyName" : null,
      "phone" : null,
      "mobile" : "13018060139",
      "address" : "my address",
      "zip" : null,
      "contactName" : "my contactName",
      "email" : null,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/1"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/1"
        }
      }
    },
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "userId" : "my userId",
      "type" : 1,
      "companyName" : null,
      "phone" : null,
      "mobile" : "11111111",
      "address" : "my address",
      "zip" : null,
      "contactName" : "Bilbo",
      "email" : null,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/6"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/6"
        }
      }
    }
  ],
  [DASHBOARD_REPORT]: [
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "error" : "黑屏故障",
      "type" : 1,
      "errorType" : 2,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/1"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/1"
        }
      }
    },
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "error" : "机器进水",
      "type" : 1,
      "errorType" : 1,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/2"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/2"
        }
      }
    }
  ],
  [DASHBOARD_REPAIR]: [
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "repairState" : 1,
      "reportID" : 1,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/2"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/2"
        }
      }
    },
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "repairState" : 2,
      "reportID" : 2,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/2"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/2"
        }
      }
    }
  ],
  [DASHBOARD_COM_STORE]: [
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "name" : "金士顿内存",
      "serial" : "DDR3 1333 8GB",
      "price" : 100,
      "size" : 34,
      "warningSize" : 10,
      "state" : 1,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/2"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/2"
        }
      }
    },
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "name" : "NVIDIA显卡",
      "serial" : null,
      "price" : 3999,
      "size" : 4,
      "warningSize" : 5,
      "state" : 3,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/2"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/2"
        }
      }
    }
  ],
  [DASHBOARD_COM_TURNOVER]: [
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "name" : "金士顿内存",
      "serial" : "DDR3 1333 8GB",
      "size" : 2,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/1"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/1"
        }
      }
    },
    {
      "created" : 1466930018001,
      "updated" : 1466930018001,
      "name" : "NVIDIA显卡",
      "serial" : null,
      "size" : 1,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/customers/2"
        },
        "customer" : {
          "href" : "http://localhost:8080/api/customers/2"
        }
      }
    }
  ],
  [DASHBOARD_WELCOME]: [

  ]
}, action) {
  return state
}

const rootReducer = combineReducers({
  userInfo,
  dashboardByName,
  selectedDashboard
})

export default rootReducer
