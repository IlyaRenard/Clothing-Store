import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as cartActions } from "../store/reducers/cart.slice";
import { actions as favoriteActions } from "..//store/reducers/favorite.slice"

const rootActions = {
  ...cartActions,
  ...favoriteActions
};

export const useAppDispatch = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
