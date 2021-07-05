1. What problem does the context API help solve?

It helps to not have to prop drill information down from parent to child to grandchild, etc. components. It helps make state management easier as an app begins to scale larger in size. 

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in Redux are objects that contain the name of the type of action the reducer needs to make and any data (payload) required to facilitate the action.
Reducers are where all the action actually occurs. It takes in an action object and based of that objects information makes changes to state and returns a new copy of state without manipulating the previous state.
The Store is an object that contains the entire state of an application at all times. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and allows access to every component in the entire application. Component state is the state specific to that container, local. Using component state would be best used when a change needs to occur in that specific component and be passed to it’s child(ten) container(s).

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux Thunk is middleware that allows us to return functions. It makes our action-creators asynchronous. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

At the moment, I am kneeling towards Redux, but I think it is only because I just used it last night in my project and it is fresh on my mind. However, it does seem like there’s a bit more steps involved in comparison to using Context API.