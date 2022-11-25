# animals

The goal of this app is to show content on the screen
and how its going to change over time using EVENT handler
and useState function. 

    Main React Concepts built into this project:
    1. Events and listening for events
    2. State and updating state


    Components must be
        1. exported from their file
        2. imported in App.js
        3. instantiated in APP.js


               ~ Updating Weight and Date using a Form  ~
 (whenever you need to update anyting on screen think USESTATE function)
                    
                      ~ To do this ~
1. The  form component needs to have
     A) weight state
     B) date state
     C) ways to handle each state when changed

2. Weight state.
    A)  Create a useState function for weight, set default to 0.   
            const [weight, setWeight] = useState(0);     

    B)  Handle weight state change (using input attribute onChange; THIS TRIGGERS THE FUNCTION ON EVERY ENTRY ) 
            const handleWeightChange = (event) => {
                setWeight(event.target.value)
            };
    ** EVENT WILL HOLD THE INPUT VALUE ON ENTRY SO WE UPDATE OUR STATE VARIABLE TO = THAT VALUE
       WE CALL THE setWeight function and pass the even value in. 

    C) JXS to handle binding weight state and input. 

       return (
        <form>
        <label>Weight</label>
        <input type="number" value={weight} onChagne={handleWeightChange}>
        </form>
       ) 

3. Date state
    
    A) Create a ustate function for date set default to empty string. 
            const [date, setDate] = useState("");

    B) Handle date state change (using input attribute onChange) 
            const = handleDateChange = (event) => {
                setDate = (event.target.value)
            };
    
    C) JXS to handle bind date state and input. 

       return (
        <form>
        <label>Weight</label>
        <input type="number" value={weight} onChagne={handleWeightChange}>
        <label>Date</label>   
        <input type="date" value={date} onChange={handleDateChange}> ((type="date AUTOMATICALLY GIVES A DATE PICKER))
        </form>
       ) 


4. Submit button and forms


       return (
        <form>
        <label>Weight</label>
        <input type="number" value={weight} onChagne={handleWeightChange}>
        <label>Date</label>   
        <input type="date" value={date} onChange={handleDateChange}> ((type="date AUTOMATICALLY GIVES A DATE PICKER))
        <button type="submit">Add</button>
        </form>
       ) 

       ~ Whenever a form is submitted in html documents the page will reload. it thinks we are trying to push info.
       to prevent this behavior we use a hande sumbit function ~ 

       const handleFormSubmit = (even) => {
        event.preventDefault();
       }
                 ~ This will prevent the form from refreshing the page on ever submit. 
                     Like inputs have onChange forms have onSubmit. this will pass the form 
                     submisson to the handleFormSubmit function which shuts off the auto page refresh.  
        return (
        <form onSubmit={handlFormSubmit}>
        <label>Weight</label>
        <input type="number" value={weight} onChagne={handleWeightChange}>
        <label>Date</label>   
        <input type="date" value={date} onChange={handleDateChange}> ((type="date AUTOMATICALLY GIVES A DATE PICKER))
        <button type="submit">Add</button>
        </form>
       ) 
