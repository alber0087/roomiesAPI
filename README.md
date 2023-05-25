# roomiesAPI

# API Routes

### Authentication Endpoints

| METHOD        | ENDPOINT      | TOKEN  | ROLE  | DESCRIPTION   | POST PARAMS                                     | RETURNS                                |
| ------------- | ------------- | ------ | ----- | ------------- | ----------------------------------------------- | -------------------------------------- |
| POST          | /auth/signup  | -      | user  | User sign up  | `first_name`, `last_name`, `email`, `password`  | { msg: string, token: token }          |
| POST          | /auth/login   | -      | user  | User log in   | `email`, `password`                             | { msg: string, token: token }          |


## Users
### User Endpoints

| METHOD        | ENDPOINT                 | TOKEN  | ROLE  | DESCRIPTION    | POST PARAMS               | RETURNS          |
| ------------- | ------------------------ | ------ | ----- | -------------- | ------------------------- | ---------------- |
| PUT           | /users/profile/:id       | YES    | user  | Update itself  | `first_name`, `last_name` | 'User updated'   |
| DELETE        | /users/profile/:id       | YES    | user  | Update itself  |                           | 'User deleted'   |

### Task Endpoints

| METHOD        | ENDPOINT                        | TOKEN  | ROLE  | DESCRIPTION                         | POST PARAMS               | RETURNS              |
| ------------- | ------------------------------- | ------ | ----- | ----------------------------------- | ------------------------- | -------------------- |
| POST          | /tasks/profile                  | YES    | user  | Create a task                       | `name`, `date`, `status`  | 'Task created'       |
| PUT           | /tasks/profile/:id              | YES    | user  | Mark a task as completed            |                           | 'Task completed'     |
| GET           | /tasks/profile/tasks            | YES    | user  | Get all tasks from your community   |                           | {tasks}              |

### Community Endoints

| METHOD        | ENDPOINT                        | TOKEN  | ROLE  | DESCRIPTION         | POST PARAMS                | RETURNS            |
| ------------- | ------------------------------- | ------ | ----- | ------------------- | -------------------------- | ------------------ |
| POST          | /communities/profile            | YES    | user  | Create a community  | `name`, `address`, `rooms` | 'Task created'     |
| POST          | /communities/profile/:id        | YES    | user  | Join to a community |                            | 'User joined'      |

### Expense Endpoints

| METHOD        | ENDPOINT                        | TOKEN  | ROLE  | DESCRIPTION                           | POST PARAMS      | RETURNS            |
| ------------- | ------------------------------- | ------ | ----- | ------------------------------------- | ---------------- | ------------------ |
| POST          | /expenses/profile               | YES    | user  | Create a expense                      | `name`, `price`  | 'Expense created'  |
| PUT           | /expenses/profile/:id           | YES    | user  | Mark an expense as paid               |                  | 'Expense paid'     |
| GET           | /expenses/profile/expenses      | YES    | user  | Get all expenses from your community  |                  | {expenses}         |


## Manager
### Community Endpoints

| METHOD        | ENDPOINT                     | TOKEN  | ROLE     | DESCRIPTION                      | POST PARAMS                 | RETURNS              |
| ------------- | ---------------------------- | ------ | -------- | -------------------------------- | --------------------------- | -------------------- |
| POST          | /communities/profile/:id     | YES    | manager  | Update a community               | `name`, `address`, `rooms`  | 'Community updated'  |
| GET           | /communities/profile/:id     | YES    | manager  | Invite an user to a community    |                             | 'User invited'       |
| DELETE        | /communities/profile/:id     | YES    | manager  | Delete an user from a community  |                             | 'User deleted'       |


## Admin
### User Endpoints

| METHOD        | ENDPOINT        | TOKEN  | ROLE     | DESCRIPTION       | POST PARAMS                                     | RETURNS              |
| ------------- | --------------- | ------ | -------- | ----------------- | ----------------------------------------------- | -------------------- |
| GET           | /users          | YES    | admin    | Get all users     |                                                 | {users}              |
| GET           | /users/:id      | YES    | admin    | Get one user      |                                                 | {user}               |
| PUT           | /users/:id      | YES    | admin    | Update an user    | `first_name`, `last_name`, `email`, `password`  | 'User updated'       |
| DELETE        | /users/:id      | YES    | admin    | Delete an user    |                                                 | 'User deleted'       |

### Task Endpoints

| METHOD        | ENDPOINT           | TOKEN  | ROLE     | DESCRIPTION           | POST PARAMS         | RETURNS              |
| ------------- | ------------------ | ------ | -------- | --------------------- | ------------------- | -------------------- |
| GET           | /tasks/            | YES    | admin    | Get all tasks         |                     | {tasks}              |
| GET           | /tasks/:id         | YES    | admin    | Get one task          |                     | {task}               |
| PUT           | /tasks/:id         | YES    | admin    | Update a task         |                     | 'Task updated'       |
| DELETE        | /tasks/:id         | YES    | admin    | Delete a task         |                     | 'Task deleted'       |

### Community Endpoints

| METHOD        | ENDPOINT           | TOKEN  | ROLE     | DESCRIPTION           | POST PARAMS                  | RETURNS              |
| ------------- | ------------------ | ------ | -------- | --------------------- | ---------------------------- | -------------------- |
| GET           | /communities/      | YES    | admin    | Get all communities   |                              | {communities}        |
| GET           | /communities/:id   | YES    | admin    | Get one community     |                              | {community}          |
| POST          | /communities/      | YES    | admin    | Create a community    | `name`, `address`, `rooms`   | 'Community created'  |
| DELETE        | /communities/:id   | YES    | admin    | Delete a community    |                              | 'Community deleted'  |

### Expense Endpoints

| METHOD        | ENDPOINT           | TOKEN  | ROLE     | DESCRIPTION           | POST PARAMS         | RETURNS              |
| ------------- | ------------------ | ------ | -------- | --------------------- | ------------------- | -------------------- |
| GET           | /expenses/         | YES    | admin    | Get all expenses      |                     | {expenses}           |
| GET           | /expenses/:id      | YES    | admin    | Get one user          |                     | {expense}            |
| POST          | /expenses          | YES    | admin    | Create an expense     | `name`, `price`     | 'Expense created'    |
| PUT           | /expenses/:id      | YES    | admin    | Update an expense     |                     | 'Expense updated'    |
| DELETE        | /expenses/:id      | YES    | admin    | Delete an expense     |                     | 'Expense deleted'    |
