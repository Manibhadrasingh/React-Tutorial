import React, { Component } from "react";
import "./App.css";
// import ComponentC from "./components/ComponentC";
// import { UserProvider } from "./components/UserContext";
// import { UserConsumer } from "./components/UserContext";
// import reactRef from "./components/reactRef";
import RefsExample from "./components/RefsExample";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import OnHoverTwo from "./components/OnHoverTwo";
// import User from "./components/User"
// import Counter from "./components/Counter";
// import ClickCounter from "./components/ClickCounter";
// import OnHover from "./components/OnHover";
// import ErrorBoundary from "./components/ErrrorBoundary";
// import Hero from "./components/Hero";
// import DateChanger from './components/DateChanger';
// import FRParentInput from "./components/FRParentInput";

// import TakeFocusInput from './components/TakeFocusInput';
// import TakeInput from './components/TakeInput';
// import RefsExample from './components/RefsExample';
// import ParenComponent from './components/ParenComponent';
// import Fragment_Table from './components/Fragment_Table';
// import Greet from './components/Greet';
// import {Greet} from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Count from './components/Count'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import KeyList from './components/KeyList'
// import StyleSheet from './components/StyleSheet'
// import Inline from './components/Inline'
// import './appStyle.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA'
// import Fragment from './components/Fragment';
// import Table from './components/Table';
// import ParentComp from './components/ParentComp'
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput'
// import FRParentinput from './components/FRParentinput';
// import PortalDemo from './components/PortalDemo'
// import NewForm  from './components/NewForm';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import LifeCycle_A from './components/LifeCycle_A';
// import Pure_Component from './components/Pure_Component';
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <>
            {/* <ErrorBoundary>
        <Hero HeroName = "Superman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero HeroName = "Batman"></Hero>
        </ErrorBoundary> */}

            {/* <ErrorBoundary>
        <Hero Heroname = "Joker"/>
        </ErrorBoundary> */}
            {/* <NewForm/> */}
            {/* <LifeCycle_A/> */}
          </>

          // <PortalDemo />
          // <FRParentinput/>
          // <FocusInput/>
          // <RefsDemo/>
          // <ParentComp/>
          // <Table/>
          // <Fragment/>
          // <LifecycleA />
          // <Form/>
          // <><h1 className='error'>Error</h1>
          // <h1 className={styles.success}>Success</h1>
          // <Inline/>
          // </>
          // <StyleSheet primary ={true} />
          // <KeyList/>
          // <NameList/>
          // <UserGreeting/>
          // <EventBind/>
          // <ParentComponent/>
          // <ClassClick/>
          // <FunctionClick/>

          // <Count/>
          // <Message/>
          //  <Hello/>
          //  <Greet name  = "Ram" fatherName = " Dashrath"></Greet>
          // <p>This is all God</p>
          //  <Greet name  = "Lashman" fatherName = " Dashrath"/>
          /*  <Greet name  = "Bharat" fatherName = " Dashrath"/>
       <Greet name  = "Shatrughan" fatherName = " Dashrath"/>
       <Welcome name  = "Ram" fatherName = " Dashrath" />
       <Welcome name  = "Lakshman" fatherName = " Dashrath" />
      // <Welcome name  = "Shartrughan" fatherName = " Dashrath" /> */
        }
        {/* <Welcome name  = "Bharat" fatherName = " Dashrath" /> */}
        {/* <Fragment_Table/> */}
        {/* <Pure_Component/> */}
        {/* <ParenComponent/> */}
        {/* <RefsExample/> */}
        {/* <TakeFocusInput/> */}
        {/* <DateChanger/> */}
        {/* <FRParentInput/> */}
        {/* <ErrorBoundary>
          <Hero heroName="PankajTripathi"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Rajkumar"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
      {/* <ClickCounter name='Manibhadra Singh'/> */}
      {/* <OnHover/> */}
      {/* <ClickCounterTwo />
      <OnHoverTwo />
      <User render={ (isLoggedIn)=>isLoggedIn ? 'Manibhadra Singh' : 'Guest'}/> */}
      {/* <Counter render={(count,incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />
    )}
    />  
      <Counter render={(count,incrementCount) => (<OnHoverTwo count={count} incrementCount={incrementCount} />
    )}
    />   */}
  {/* <UserProvider value="Manibhadra">
    <ComponentC />
  </UserProvider> */}
  <RefsExample />
      </div>
    );
  }
}

export default App;

