# To do

1. Conditional logic in header useEffect that valididates three things:
    * Is the user authenticated? 
    * Is the user verified?
    * Does the user have a User object?

    If the user is authenticated but not verified, or the user is verified but doesn't have a user object, I want the header to put an alert icon of some sort next to the link to ServiceProvider with a tooltip that says something about continuing signup.