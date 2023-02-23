import React, { useEffect, useState } from 'react';
import '../../flow/config';

import * as fcl from '@onflow/fcl';
import Head from 'next/head';
import { useRouter } from 'next/router';

import AppleSignin from '../../src/components/atom/appleSignin';
import GoogleSignin from '../../src/components/atom/googleSignin';

const SignIn = () => {
  const [user, setUser] = useState({ loggedIn: null });
  const [name, setName] = useState(''); // NEW
  const [transactionStatus, setTransactionStatus] = useState(null); // NEW
  const router = useRouter();

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  useEffect(() => {
    if (user.loggedIn) {
      router.push('/app/explore');
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

    setName(profile?.name ?? 'No Profile');
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
      args: (arg, t) => [arg('JJ', t.String)],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    fcl.tx(transactionId).subscribe(res => setTransactionStatus(res.status));
  };

  const AuthedState = () => (
    <div>
      <div>Address: {user?.addr ?? 'No Address'}</div>
      <div>Profile Name: {name ?? '--'}</div>
      <div>Transaction Status: {transactionStatus ?? '--'}</div>
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
    <>
      <Head>
        <title>Wallet</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000000',
        }}
      >
        <div
          style={{
            width: '800px',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            // border: '3px solid #eee',
            // borderTop: 'none',
            // borderBottom: 'none',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          />
          <div
            style={{
              width: '100%',
              height: '700px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '80px',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '5rem',
                  textAlign: 'left',
                  color: '#fff',
                }}
              >{`Here is your\nnext wallet,\nWallat`}</h1>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <GoogleSignin />
              <AppleSignin />
            </div>
            {/* {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
