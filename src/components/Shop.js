import React from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state/index'


export default function Shop(){
const dispatch = useDispatch();
const actions = bindActionCreators(actionCreators,dispatch)

  return(
    <>
    <h2 className="my-5">Wallet</h2>
      <button className="btn btn-primary mx-2 my-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Withdraw/Deposit Money
      <button className="btn btn-primary mx-2 my-3"onClick={()=>{actions.depositMoney(100)}}>+</button>

    </>
  )
}
