import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types';

import Checkbox from './Checkbox'


export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onToggleItemCompleted: PropTypes.func.isRequired,
  }

  renderItem = (todo, i) => {
    const {onToggleItemCompleted, onRemoveItem} = this.props
    const itemStyle = todo.completed ? [styles.item, styles.completed] : styles.item

    return (
      <View key={i} style={itemStyle}>

        <Text> {todo.label} </Text>

        <View style={styles.rightSection}>

          <Checkbox
            isChecked={todo.completed}
            onToggle={() => onToggleItemCompleted(i)}
            />

          <TouchableOpacity onPress={() => onRemoveItem(i)} >

            <Text style={styles.remove}> &times; </Text>

          </TouchableOpacity>

        </View>

      </View>
    )
  }

  render() {
    const {todos} = this.props

    return (

      <ScrollView>

        {todos.map(this.renderItem)}

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },

  completed: {
    backgroundColor: 'whitesmoke',
  },

})
