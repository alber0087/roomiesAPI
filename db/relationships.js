const User = require('../api/models/user.model')
const Community = require('../api/models/community.model')
const Expense = require('../api/models/expense.model')
const Task = require('../api/models/task.model')
const Task_community = require('../api/models/task_community.model')
const Community_expense = require('../api/models/community_expense.model')

const createRelations = () => {
  Community.belongsToMany(Task, { through: Task_community })
  Task.belongsToMany(Community, { through: Task_community })

  User.hasMany(Task_community)
  Task_community.belongsTo(User)

/*   Community.hasMany(Task, { through: 'task_community' })
  Task.belongsToMany(Community, { through: 'task_community' }) */
}

module.exports = createRelations