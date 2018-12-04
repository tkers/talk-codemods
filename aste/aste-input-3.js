import React from 'react'

class MyComponent extends React.Component {
  state = {
    foo: 'hello',
    bar: 42
  }
  constructor() {

  }
}

class MyComponent2 extends React.Component {
  state = {
    foo: 'hello',
    bar: 42
  }
  constructor() {
 	  doSomethingElse()
  }
}

class MyComponent3 extends React.Component {
  state = {
    foo: 'hello',
    bar: 42
  }
  constructor() {
 	  super()
  }
}
