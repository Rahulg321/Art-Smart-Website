'use client';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import { RxCross2 } from 'react-icons/rx';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { cartDrawerActions } from '@/lib/features/UI/cart-drawer-slice';

const CartDrawer = () => {
  const { theme, setTheme } = useTheme();
  const showCart = useAppSelector((state) => state.cartDrawer.showCart);
  const dispatch = useAppDispatch();

  const drawerStyles = {
    backgroundColor: theme === 'dark' ? '#0c0d0c' : '#faeee7',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem', // You can adjust the gap value as needed
    justifyContent: 'start',
  };

  const toggleDrawer = () => {
    dispatch(cartDrawerActions.toggleCart());
  };

  return (
    <Drawer
      open={showCart}
      onClose={toggleDrawer}
      direction="right"
      style={drawerStyles}
      size="60vw"
    >
      <div
        className="absolute top-2 right-0 hover:cursor-pointer"
        onClick={toggleDrawer}
      >
        <RxCross2 size="30" />
      </div>

      <p>we are inside the cart Drawer</p>
    </Drawer>
  );
};

export default CartDrawer;
