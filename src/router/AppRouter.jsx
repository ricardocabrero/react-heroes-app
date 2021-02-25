import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../components/ui/navBar/NavBar";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const AppRouter =() => {
    return (
        <Router>
            <div>             
                <NavBar/>
                <Switch>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel"/>
               </Switch>
            </div>
        </Router>
    );
}