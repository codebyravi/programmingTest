# Two-Phase Commit
- When we're sharding the database to increase the scalability of the application, we would like to have complete transactions whether they're successful or failures.
- Two Phase Commit makes these distributed transactions atomic
- It has an entity which takes care of the transaction commits. The commit message is send to all teh transaction participating servers waiting for the response from them. 
- It waits for the response to either commit or abort the transaction which is the second phase of the commit.
- When there is a communication between multiple backends through notifications, two phase commit protocol can be used to roll back the changes over multiple services, communication between the services, stability and atomicity of the databases.

## Voting/Prepare Phase
- An entity tells each backend service what to commit and respond either success or failure. 

## Commit Phase
- An entity collects the votes and asks all the services to notify either commit or roll back.

## Communication
- Using either explicit or implicit messages depending on the priority of the system.
- Command or events based systems use asynchronous messages.

### When we don't use this
- The entity which handles the coordination of responses from all the services have to wait to receive the response to progress into second phase.
- If that single entity fails, all the transactions will enter blocked state.
- There will be waste of resources if a transaction fails on a single service which makes a rollback on other services.
- For transactions like booking tickets cannot use two phase commit use a compensation transaction if it's not confirmed in a specific time frame.

### When we use This
- Two phase scheme is used in Databases where we have low intrusion into business code.
- It is used when there is less time to lock the resources to be committed or rolled back.
