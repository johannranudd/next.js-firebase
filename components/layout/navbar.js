import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../../styles/navbar.styles/navbar.styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiCoffeeBeans } from 'react-icons/gi';

const Navbar = () => {
  return (
    <StyledNav>
      <section className='section-center'>
        <div>
          <Link href={`/`}>
            <h2 className='logo'>
              <GiCoffeeBeans />
            </h2>
          </Link>
        </div>
        <div className='menu'>
          <Link href='/'>
            <button>
              <AiOutlineShoppingCart />
            </button>
          </Link>
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
