import React, { Component} from 'react';
import './Table.scss';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { formatAmount } from '../../util/util'
import {Row, Col, Container} from "react-bootstrap"

import PropTypes from 'prop-types';

class PaymentsTable extends Component {
    static propTypes = {
        data : PropTypes.object.isRequired
    }

    

    render(){
        const { data, onDeposit, onWithdraw }= this.props;

    
        const columns = [
            { 
                Header: 'Investment' ,
                accessor: 'investment_name'
            
            },
            { 
                Header:'Balance',
                accessor: (data)=> formatAmount(+data.balance),
            },
            { 
                Header:'Deposit/ Withdraw',
                Cell: row => (
                    <div>
                        <button onClick={() => onDeposit(row.account_id)}>Deposit</button>
                        <button onClick={() => onWithdraw(row.account_id)}>Withdraw</button>
                    </div>
                )

            }            
        ]

    
        return(
            <div>
                <div className="Charttable-container d-none d-sm-block">
                    <ReactTable
                        noDataText={'No investments found'}
                        className="-striped"
                        data={data}
                        columns={columns}
                        showPagination={false}
                    />
                </div>
            </div>
         )
    }
}
export default PaymentsTable;
