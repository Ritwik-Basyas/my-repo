const initialState = 
{
    contacts: 
    [
        {
            "id": 1,
            "name":"Ritwik Basyas",
            "mobileNo": 7002865293,
            "status": "Active",
            "email": "job@gmail.com",
            "company": "Taiyo",
            "jobTitle": "Front End Developer",
        },
    
        {
            "id": 2,
            "name": "Rahul Kumar",
            "mobileNo": 9854375031,
            "status": "Inactive",
            "email": "rahul@gmail.com",
            "company": "Google",
            "jobTitle": "DBA",
        }
    ]
    
}
export const contactViewer = (state = initialState, action) => {
    switch(action.type)
    {
        case "CREATE_CONTACT":
            return{
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}
