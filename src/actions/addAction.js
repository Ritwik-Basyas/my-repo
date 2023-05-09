// creating action for adding new contact

export const addContact = (contact) =>{
    return{
        type: "CREATE_CONTACT",
        payload: contact,
    };
};