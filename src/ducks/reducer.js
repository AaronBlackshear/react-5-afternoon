
var initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

//ACTION TYPES
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';


function reducer(state = initialState,action){
    switch(action.type){
        case UPDATE_LOAN_TYPE :
            return Object.assign( {}, state, { loanType: action.payload } );
        case UPDATE_PROPERTY_TYPE :
            return Object.assign( {}, state, { propertyType: action.payload } );
        case UPDATE_CITY :
            return Object.assign( {}, state, { city: action.payload } );
        case UPDATE_PROP :
            return Object.assign( {}, state, { propToBeUsedOn: action.payload } );
        case UPDATE_FOUND :
            return Object.assign( {}, state, { found: action.payload } );
        default: return state;
    }
}

//ACTION TYPES
export var updateLoanType = loanType => {
    type: UPDATE_LOAN_TYPE;
    payload: loanType;
};

export var updatePropertyType = property => {
    type: UPDATE_PROPERTY_TYPE;
    payload: property;
}

export var updateCity = city => {
    type: UPDATE_CITY;
    payload: city;
}

export var updateProp = prop => {
    type: UPDATE_PROP;
    payload: prop;
}

export var updateFound = found => {
    type: UPDATE_FOUND;
    payload: found;
}

export var updateRealEstateAgent = realEstateAgent => {
    type: UPDATE_REAL_ESTATE_AGENT;
    payload: realEstateAgent;
}

export var updateCost = cost => {
    type: UPDATE_COST;
    payload: cost;
}

export var updateDownPayment = downPayment => {
    type: UPDATE_DOWN_PAYMENT;
    payload: downPayment;
}

export var updateCedit = credit => {
    type: UPDATE_CREDIT;
    payload: credit;
}

export var updateHistory = history => {
    type: UPDATE_HISTORY;
    payload: history;
}

export var updateAddressOne = addressOne => {
    type: UPDATE_ADDRESS_ONE;
    payload: addressOne;
}

export var updateAddressTwo = addressTwo => {
    type: UPDATE_ADDRESS_TWO;
    payload: addressTwo;
}

export var updateAddressThree = addressThree => {
    type: UPDATE_ADDRESS_THREE;
    payload: addressThree;
}

export var updateFirstName = firstName => {
    type: UPDATE_FIRST_NAME;
    payload: firstName;
}

export var updateLastName = LastName => {
    type: UPDATE_LAST_NAME;
    payload: LastName;
}

export var updateEmail = email => {
    type: UPDATE_EMAIL;
    payload: email;
}

export default reducer;