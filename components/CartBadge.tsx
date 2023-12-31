import React from 'react';
import { Badge, Button } from '@nextui-org/react';
import { FaShoppingCart } from 'react-icons/fa';
import { cartDrawerActions } from '@/lib/features/UI/cart-drawer-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function CartBadge() {
  const showCart = useAppSelector((state) => state.cartDrawer.showCart);
  const dispatch = useAppDispatch();
  const cartClickHandler = () => {
    console.log("you have toggled the cart", showCart);
    dispatch(cartDrawerActions.toggleCart());
  };
  return (
    <button onClick={cartClickHandler}>
      <Badge content="5" color="primary">
        <FaShoppingCart size="30" />
      </Badge>
    </button>
  );
}
