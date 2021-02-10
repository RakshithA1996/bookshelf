const initFeatureArray = {
    featureArr : [
        {
            id:0,
            heading:"Books for all Ages",
            description:"Quality E-Books for all age groups and for interests of different topics.",
        },
        {
            id:1,
            heading:"Huge Library",
            description:"We have a huge library with different catagories of books both free and paid, You can also read online",
        },
        {
            id:2,
            heading:"Languages",
            description:"Translated books are available, Old Indian Mythological sanskrit books are translated into enlish",
        }
    ]
} 

const featureReducer = (state = initFeatureArray, action) => {
    switch(action.type){
        case "Features" :
            return state;
        default :
            return state;
    }
}

export default featureReducer;