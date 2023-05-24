const User = require('../api/models/user.model')
const Community = require('../api/models/community.model')
const Expense = require('../api/models/expense.model')
const Task = require('../api/models/task.model')
const Task_community = require('../api/models/task_community.model')
const Community_expense = require('../api/models/community_expense.model')

const createRelations = () => {
  Task.belongsToMany(Community, { through: Task_community })
  Community.belongsToMany(Task, { through: Task_community })

  User.hasMany(Task_community)
  Task_community.belongsTo(User)

  Expense.belongsToMany(Community, { through: Community_expense })
  Community.belongsToMany(Expense, { through: Community_expense })

  User.hasMany(Community_expense)
  Community_expense.belongsTo(User)

  Community.hasMany(User)
  User.belongsTo(Community)

  User.hasMany(Expense)
  Expense.belongsTo(User)
}

module.exports = createRelations



