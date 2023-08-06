'use client';

import { useState } from 'react';

export default function Demo() {
  const [response, setResponse] = useState<string>('');

  const signIn = async (e: any) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      const res = await fetch('/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });
      const json = await res.json();

      setResponse(JSON.stringify(json));
    } catch (error) {
      alert(error);
    }
  };

  const signOut = async () => {
    try {
      await fetch('/api/v1/logout', { method: 'POST' });
      setResponse('204 No Content');
    } catch (error) {
      alert(error);
    }
  };

  const getCurrentUserResource = async (resource: string) => {
    try {
      const res = await fetch(`/api/v1/users/current/${resource}`);
      const json = await res.json();

      setResponse(JSON.stringify(json));
    } catch (error) {
      alert(error);
    }
  };

  const addItem1ToCart = async () => {
    try {
      const res = await fetch('/api/v1/users/current/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: 1 }),
      });
      const json = await res.json();

      setResponse(JSON.stringify(json));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className='max-w-[90rem] mx-auto flex flex-col items-center'>
      <div className='px-10 py-16 self-stretch mx-auto'>
        <form onSubmit={signIn}>
          <div className='flex flex-col space-y-6'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                name='email'
                value='testtester@gmail.com'
                readOnly
                className='border border-stone-500 rounded-md p-2 text-black'
              />
            </div>

            <div className='flex flex-col space-y-2 mb-4'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                value='password'
                readOnly
                className='border border-stone-500 rounded-md p-2 text-black'
              />
            </div>

            <div>
              <button type='submit' className='bg-stone-500 text-white rounded-md p-2 mt-3 w-full'>
                Sign In
              </button>
            </div>
          </div>
        </form>

        <div className='flex gap-3 flex-wrap'>
          <button onClick={signOut} className='border border-stone-500 rounded-md p-2 mt-8'>
            Sign Out
          </button>

          <button
            onClick={() => getCurrentUserResource('cart')}
            className='border border-stone-500 rounded-md p-2 mt-8'
          >
            Get Current User Cart
          </button>

          <button
            onClick={() => getCurrentUserResource('reviews')}
            className='border border-stone-500 rounded-md p-2 mt-8'
          >
            Get Current User Reviews
          </button>

          <button onClick={addItem1ToCart} className='border border-stone-500 rounded-md p-2 mt-8'>
            Add Item 1 To Cart
          </button>
        </div>

        <div className='mt-8 max-w-[40rem] overflow-x-auto'>
          <h2 className='text-2xl font-bold mb-4'>Response</h2>
          {response && <p>{response}</p>}
        </div>
      </div>
    </main>
  );
}
