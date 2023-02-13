import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="container-wallet">
        <div className="container-header">
          <Header />
          <WalletForm />
        </div>
        <div className="container-form">
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
