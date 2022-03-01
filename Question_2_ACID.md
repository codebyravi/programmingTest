# ACID compliance
- Atomicity, Consistency, Isolation and Durability.
- ACID compliance helps ensure database transactions are performed reliably.

## Atomicity
- Transaction as one unit. They do not occur partially. Abort or Commit transactions.
## Consistency
- Data should be consistent before or after the transactions. Saved data shouldn't affect the state of database.
## Isolation
- Multiple transactions can happen concurrently without any inconsistency in data.
- Transactions should take place ins isolation to have more transparency.
- No midair collisions.
## Durability
- It makes sure the transactions are completed and never affects the data before it's complete.
- System failures or restarts should affect the executed transactions or state of database.

### Use case
- Mostly banking transactions.
- Relational SQL Databases follow ACID compliance.

## When ACID compliant is relaxed
- In distributed systems, we cannot achieve full consistency and availability. 
- BASE is used as a standard for NoSQL databases,
- Multiple scenarios are fine with eventual consistency like ingesting streaming data or working with analytics.
- BASE has issues like losing data, dirty and non-repeatable reads, concurrent transactions that read data which is being updated can return duplicate or non-existent data.
