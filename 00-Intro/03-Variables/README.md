# JavaScript Variables

There are some rules for naming variables:

 - Variable name can't start with a number.
 - Variable name has to be meaningful. Use descriptive names. For example, rather `var s = 0;` do, `var score = 0;`
 - To make variable understandable, use separations. I didn't mean adding space by the way. I meant use underscore, or use camelCasing. Like, `var price_per_unit;` or `var pricePerUnit;`
 - Variable names should contain **Letters, Numbers, Dollar sign, and Underscore** characters.


Two Common Value Types of variable,
 - Numbers
 - Strings


## String

Strings are started when **quote** signs are added. If you start with **single quote**, end with a **single quote**. And if you start with **double quote** then end with a **double quote**.

But things get trickier when you will do `var person = 'She's a person!';` This time you have to use backslash, as a **escape character**, to know the interpreter that that's a full string. For example, `var person = 'She\'s a person!';`

Or,

Use double quotes in a string. like, `var person = "Shes's a person!";`