import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
 

export default (<Router>
                <div>
                    <Route exact path= '/' render={()=> <NextBtn />} />

                    <Route path='/wOne' component={WizardOne} />
                    <Route path="/wTwo" component={WizardTwo}/>
                    <Route path="/wThree" component={WizardThree}/>
                    <Route path='/wFour' component={WizardFour}  />
                    <Route path="/wFive" component={WizardFive}  />
                    <Route path="/wSix" component={WizardSix}/>
                    <Route path="/wSeven" component={WizardSeven}/>
                    <Route path="/wEight" component={WizardEight}/>
                    <Route path="/wNine" component={WizardNine}/>
                    <Route path="/wTen" component={WizardTen}/>
                    <Route path="/wEleven" component={WizardEleven}/>
                    <Route path='/finish' component={Finish} />
                </div>
            </Router>)
 

// (loanType, propType, changeLoanType, changePropertyType, changePropertyToBeUsedOn, propToBeUsedOn, city, updateCity, foundFalse, foundTrue, found, realEstateAgentTrue, realEstateAgentFalse, realEstateAgent, updateDownPayment, downPayment, updateCost, cost, credit, updateCreditE,updateCreditG, updateCreditF,updateCreditP, history, updateHistory, addressOne, addressTwo, addressThree, updateAddLineOne, updateAddLineTwo, updateAddLineThree, updateFirst, updateLast, updateEmail, firstName, lastName, email)