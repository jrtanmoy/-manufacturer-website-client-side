import React from 'react';
import code from '../../assets/images/blog-answer-code.png'

const Blogs = () => {
    return (
        <div className='mt-5 pt-4'>
            <div>
                <h1 className='text-2xl'>1. How will you improve the performance of a React Application?</h1>
                <p className='text-lg'>Ans :</p>
                <p className='text-lg'>There are many ways to optimize a React app. Some example are given below:</p>
                <p className='text-lg '>a) Avoid Anonymous Functions</p>
                <p className='text-lg '>b) Update Components Only When Necessary and Required</p>
                <p className='text-lg '>c) Immutable Data Structures</p>
                <p className='text-lg '>d) Don’t use an array index as the key when using .map()</p>
                <p className='text-lg '>e) Use memo and PureComponent etc.....</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl'>2. What are the different ways to manage a state in a React application?</h1>
                <p className='text-lg '>Ans :</p>
                <p className='text-lg'>Every React component has a built-in state. This state is an object which stores the property values that belong to a component.The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of:</p>
                <p className='text-lg '>a) Hooks.</p>
                <p className='text-lg '>b) React Context API.</p>
                <p className='text-lg '>c) Apollo Link State.</p>
                <p className='text-lg'>However there are four main types of state you need to properly manage in your React apps:</p>
                <p className='text-lg '>a) Local state.</p>
                <p className='text-lg '>b) Global state.</p>
                <p className='text-lg '>c) Server state.</p>
                <p className='text-lg '>d) URL state.</p>


            </div>
            <div className='mt-5'>
                <h1 className='text-2xl'>3. How does prototypical inheritance work?</h1>
                <p className='text-lg '>Ans :The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. JavaScript mimics the class inheritance through prototypal delegation, which depends on the [[Prototype]] property to link together an object with all its previous prototypes, building a prototype chain. Prototypal inheritance is more than Class inheritance, by replacing the creation of objects, modification, and extension in an easy way using literal objects, with instances of classes, is like putting a constrained layer on top of the language’s flexibility.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl'>4.  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h1>
                <p className='text-lg '>Ans :</p>
                <p className='text-lg '>One should never update the state directly because of the following reasons:</p>
                <p className='text-lg '>a) If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                <p className='text-lg '>b) When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                <p className='text-lg '>c) You will lose control of the state across all components.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-lg '> Ans :</p>
                <img src={code} alt="" />

            </div>
            <div className='mt-5 mb-5'>
                <h1 className='text-2xl'>6.  What is a unit test? Why should write unit tests?</h1>
                <p className='text-lg '>Ans :</p>
                <p className='text-lg '>a) UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>
                <p className='text-lg '>b) Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>


        </div>
    );
};

export default Blogs;