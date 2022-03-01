# PS5 Drop Problem

## Given Question
- You have been given 2 unusually durable PS5’s. 
- You are in an office building that is 100 stories high.
- Using the fewest possible number of drops from windows in your office building, determine the highest floor you can drop a PS5 from and have it survive. 
- For example, they might be able to take the drop from the 30th floor, but not the 31st. You can break both PS5s in your search. 
- State the worst case number of drops needed and explain how you arrived at that answer.

### Assumptions based on the question
- PS5 which is destroyed from the fall, it will not be used.
- If a PS5 is destroyed from a floor, it would be destroyed if dropped from the higher floor.
- If a PS5 is not broken, it wouldn't be broken from a lower floor
- Both the PS5s are destroyed the same way and would not be used after being destroyed.

#### My thoughts
- Worst case scenario is dropping the PS5 from every floor starting from the first floor which is 100 drops.
- Using Binary Search method, we can start from the 50th floor and the worst case is 49th floor.

### Solution
- We start our first attempt dropping the PS5 from x floor. 
- If it is destroyed, we try the lower x-1 floors. For this attempt, the worst case is x drops.
- If it isn't destroyed, we have worst case x + (x-1) drops.
- In this scenario, we've x + (x-1) + (x-2) + (x-3) + (x-4) + ... 
- The total number of floors is 100, we sum up the drops to 100 to find the x value.
- x + (x-1) + (x-2) + (x-3) + (x-4) + (x-5) + ... + 2 + 1 = 100
- (x(x+1))/2 = 100
- x = 13.650971698084906
- If we drop the PS5 from 14th floor, and we destroy one PS5, we've 13 drops remaining, and we start from the 1st floor.
- If we drop from 14th floor, and it doesn't break, we start from 27th floor, we try 15 to 26 drops.
- We use the same scenario to try every x floor where x % 13 == 0.
- So, the worst case drops is 14.
