// various methods in console function
console.clear() // It clears the all message on console
console.log("log message") // It prints output to console 
console.error("error message") // It prints output to console highlighted with red background
console.warn("warn message") // It prints output to console highlighted with yellow background
console.time('abc') // It is used to measure time between time and timeEnd 
console.timeEnd('abc') 
console.table({'a':1, 'b':2}) // It is used to create table
console.count() // It is used in iteration to count records
console.group("Group1") // It groups all the console object between group and groupEnd
    console.log("log message1") 
    console.log("log message2") 
    console.warn("warn message1")
    console.warn("warn message2")
console.groupEnd()