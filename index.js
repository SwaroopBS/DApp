import { Fragment } from 'react';
import Head from 'next/head';
//import React, { Component } from 'react';
import manager from "../ethereum/manager";
import student from "../ethereum/student";
//import web3 from "../ethereum/web3";
//import { MongoClient } from 'mongodb';



function HomePage(props) {

  console.log(props.admin);
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta
          name='description'
          content='Just a test app!'
        />
      </Head>
      <main>
        <h1>Home Page</h1>
        <h2>{props.admins}</h2>
      </main>
    </Fragment>
  );
}

/*
function HomePage() {

  var admins;
  async function getInitialProps(){
    const admins = student.methods.view_admin_address().call();
    console.log(admins);
  }
  console.log(admins);
  

  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta
          name='description'
          content='Just a test app!'
        />
      </Head>
      <main>
        <h1>Home Page</h1>
        <h2>{admins}</h2>
      </main>
    </Fragment>
  );
}
*/

export async function getStaticProps() {

  try{
    //const admins = await manager.methods.getAdminsList().call();
    const admins = await student.methods.getData.call();


    //const admins = await web3.eth.getBalance(instance.options.address);
    //const admins = await web3.eth.getAccounts();
    return {
    props: { admins }
    };
  }catch (error){
    return { 
      props: { error1: "error11" }
     };
  }
}


/*
export async function getStaticProps() {

    //const admins = await manager.methods.getAdminsList().call();
    const admins = await student.methods.view_admin_address().call();
    return {
    props: { admins }
    };
}
*/




export default HomePage;
