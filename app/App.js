

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { actionCreators } from './redux/todoListRedux'
import List from './components/List'
import Input from './components/Input'
import Title from './components/Title'
import Footer from './components/Footer'


const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  
  addItem = (text) => {
    const {dispatch} = this.props;

    dispatch(actionCreators.addItem(text))
  }

  removeItem = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.removeItem(index))
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggleItemCompleted(index))
  }

  removeCompleted = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeCompleted())
  }

  render() {
    const {todos} = this.props


    return (

      <View>

        <Title>To-Do List</Title>

        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.addItem}
        />

        <View style={styles.divider}/>

        <List
          todos={todos}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />

        <View style={styles.divider} />

        <Footer onRemoveCompleted={this.removeCompleted} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})


export default connect(mapStateToProps)(App)