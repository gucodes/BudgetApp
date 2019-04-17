import React from 'react'
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total'
import expensesSelector from '../selectors/expenses'
import numeral from 'numeraljs'

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const epxenseWord = expenseCount <= 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div>
            <h1>Viewing {expenseCount} {epxenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = expensesSelector(state.expenses, state.filters)
    
    return {
        expenseCount : visibleExpenses.length,
        expensesTotal : expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)