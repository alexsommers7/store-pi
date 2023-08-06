'use client';

import { SectionHeading } from '@/_components/typography/sectionHeading';

export default function Demo() {
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

      alert(JSON.stringify(json));
    } catch (error) {
      alert(error);
    }
  };

  const getCurrentUserCart = async () => {
    try {
      const res = await fetch('/api/v1/users/current/cart');
      const json = await res.json();

      alert(JSON.stringify(json));
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

      alert(JSON.stringify(json));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='w-full max-w-[58rem] border-l-2 border-l-stone-900 p-10'>
      <SectionHeading>Demo</SectionHeading>

      <form onSubmit={signIn} className='mt-8 '>
        <div className='flex flex-col space-y-6'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              value='testtester@gmail.com'
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
              className='border border-stone-500 rounded-md p-2 text-black'
            />
          </div>

          <div>
            <button type='submit' className='bg-stone-500 text-white rounded-md p-2 mt-3'>
              Sign In
            </button>
          </div>
        </div>
      </form>

      <div className='flex gap-3'>
        <button
          onClick={getCurrentUserCart}
          className='border border-stone-500 rounded-md p-2 mt-8'
        >
          Get Current User Cart
        </button>

        <button onClick={addItem1ToCart} className='border border-stone-500 rounded-md p-2 mt-8'>
          Add Item 1 To Cart
        </button>
      </div>
    </div>
  );
}
