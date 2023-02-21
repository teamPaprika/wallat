<<<<<<< Updated upstream
import React from 'react';


const SignIn = () => {
  const a = 1
  return (<div>SignIn</div>)
}

export default SignIn;
=======
import React, { useMemo } from "react";

import "../../flow/config";
import { useState, useEffect } from "react";

import * as fcl from "@onflow/fcl";
import Head from "next/head";
import { useRouter } from "next/router";

const SignIn = () => {
  const [user, setUser] = useState({ loggedIn: null });
  const [name, setName] = useState(""); // NEW
  const [transactionStatus, setTransactionStatus] = useState(null); // NEW
  const router = useRouter();

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  useEffect(() => {
    if (user.loggedIn) {
      router.push("/app/explore");
    }
  }, [user.loggedIn]);

  // NEW
  const sendQuery = async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg, t) => [arg(user.addr, t.Address)],
    });

    setName(profile?.name ?? "No Profile");
  };

  // NEW
  const initAccount = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile

        transaction {
          prepare(account: AuthAccount) {
            // Only initialize the account if it hasn't already been initialized
            if (!Profile.check(account.address)) {
              // This creates and stores the profile in the user's account
              account.save(<- Profile.new(), to: Profile.privatePath)

              // This creates the public capability that lets applications read the profile's info
              account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
            }
          }
        }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    const transaction = await fcl.tx(transactionId).onceSealed();
    console.log(transaction);
  };

  const executeTransaction = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
      import Profile from 0xProfile

      transaction(name: String) {
        prepare(account: AuthAccount) {
          account
            .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
            .setName(name)
        }
      }
    `,
      args: (arg, t) => [arg("JJ", t.String)],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    fcl.tx(transactionId).subscribe((res) => setTransactionStatus(res.status));
  };

  const AuthedState = () => (
    <div>
      <div>Address: {user?.addr ?? "No Address"}</div>
      <div>Profile Name: {name ?? "--"}</div>
      <div>Transaction Status: {transactionStatus ?? "--"}</div>
      {/* NEW */}

      {/* NEW */}
      <button onClick={sendQuery}>Send Query</button>
      {/* NEW */}
      <button onClick={initAccount}>Init Account</button>
      <button onClick={executeTransaction}>Execute Transaction</button>
      <button onClick={fcl.unauthenticate}>Log Out</button>
    </div>
  );

  const UnauthenticatedState = () => (
    <div>
      <button onClick={fcl.logIn}>Log In</button>
      <button onClick={fcl.signUp}>Sign Up</button>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Wallet</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "800px",
            height: "600px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            border: "3px solid #eee",
            borderRadius: "10px",
          }}
        >
          <h1>Sign In</h1>
          {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
>>>>>>> Stashed changes
